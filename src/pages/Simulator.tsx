import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getRandomQuestions, type Question } from '@/data/questions';
import { HOT_SEAT_LADDER, getLevelByQuestionNumber, getConsolationPrize } from '@/data/hotSeatConfig';
import { getRankFromEggs, getRankTitle } from '@/types/quiz';
import type { OutcomeType } from '@/types/quiz';
import { CheckCircle2, XCircle, Clock, Sparkles, Trophy, Lightbulb, ArrowRight, Shield, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import FailurePopup from '@/components/FailurePopup';
import WalkAwayPopup from '@/components/WalkAwayPopup';
import LegendaryPopup from '@/components/LegendaryPopup';
import { getRankLogo } from '@/utils/rankLogos';
import { getLevelImage } from '@/utils/levelImages';
import hotSeatMusic from '@/assets/hotseat-music.mp3';
import { useIsMobile } from '@/hooks/use-mobile';

type GameState = 'playing' | 'showing-result' | 'next-question' | 'completed';

const Simulator = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  const isMobile = useIsMobile();
  
  // Core State
  const [callsign, setCallsign] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [gameState, setGameState] = useState<GameState>('playing');
  
  // Results tracking
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [lastSafeHavenEggs, setLastSafeHavenEggs] = useState(0);
  
  // Timer
  const [timeRemaining, setTimeRemaining] = useState(40);
  
  // Lifelines
  const [lifelinesRemaining, setLifelinesRemaining] = useState(2);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  
  // Popups
  const [showFailurePopup, setShowFailurePopup] = useState(false);
  const [showWalkAwayPopup, setShowWalkAwayPopup] = useState(false);
  const [showLegendaryPopup, setShowLegendaryPopup] = useState(false);
  
  // Audio
  const [isMuted, setIsMuted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  const currentLevel = getLevelByQuestionNumber(currentQuestionNumber);
  const currentQuestion = questions[currentQuestionNumber - 1];
  const currentEggs = currentLevel?.eggsValue || 0;
  const currentRank = getRankFromEggs(currentEggs);

  // Initialize quiz
  useEffect(() => {
    const storedCallsign = localStorage.getItem('stork-callsign');
    
    if (!storedCallsign) {
      navigate('/');
      return;
    }

    setCallsign(storedCallsign);
    const selectedQuestions = getRandomQuestions(25);
    setQuestions(selectedQuestions);
    setTimeRemaining(40); // Peep tier starts with 40s
  }, [navigate]);

  // Background Music Control - Initialize audio settings once
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.volume = 0.3;
    audio.loop = true;
  }, []);

  // Background Music Control - Start playing when ready
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || questions.length === 0) return;

    // On desktop: auto-play when questions are loaded
    // On mobile: only play when user clicks the audio button (audioStarted = true)
    if (!isMobile) {
      // Desktop: auto-play
      if (!audioStarted) {
        audio.play().catch(err => {
          console.log('Audio autoplay prevented:', err);
        });
        setAudioStarted(true);
      } else if (audio.paused) {
        // If audio was paused, resume it
        audio.play().catch(err => {
          console.log('Audio resume failed:', err);
        });
      }
    } else if (audioStarted) {
      // Mobile: only play after user interaction
      if (audio.paused) {
        audio.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
    }
  }, [questions, audioStarted, isMobile]);

  // Keep audio playing - ensure it doesn't pause during quiz
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioStarted) return;

    // Check periodically and resume if paused (unless muted)
    const checkAudio = setInterval(() => {
      if (audio.paused && !isMuted && audioStarted) {
        audio.play().catch(err => {
          // Silently handle errors (might be user interaction required)
        });
      }
    }, 1000);

    return () => clearInterval(checkAudio);
  }, [audioStarted, isMuted]);

  // Cleanup: stop audio only when component unmounts
  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  // Mute/Unmute Control
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = isMuted;
    }
  }, [isMuted]);

  // Start audio on first user interaction (mobile only)
  const startAudio = () => {
    const audio = audioRef.current;
    if (audio && !audioStarted && isMobile) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().then(() => {
        setAudioStarted(true);
      }).catch(err => {
        console.log('Audio play failed:', err);
        // Try to set started anyway so button state updates
        setAudioStarted(true);
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Timer countdown
  useEffect(() => {
    if (gameState !== 'playing' || !currentLevel) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Time's up! Trigger failure
          handleFailure();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, currentLevel]);

  const handleLifeline = () => {
    if (lifelinesRemaining === 0 || eliminatedOptions.length > 0 || gameState !== 'playing') return;

    const correctIdx = currentQuestion.correctAnswer;
    const wrongOptions = [0, 1, 2, 3, 4].filter(idx => idx !== correctIdx);
    
    // Randomly select 2 wrong options to eliminate
    const shuffled = wrongOptions.sort(() => Math.random() - 0.5);
    const toEliminate = shuffled.slice(0, 2);
    
    setEliminatedOptions(toEliminate);
    setLifelinesRemaining(prev => prev - 1);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (gameState !== 'playing' || isAnswerLocked) return;
    setSelectedAnswer(answerIndex);
  };

  const handleFinalAnswer = () => {
    if (selectedAnswer === null || gameState !== 'playing') return;
    
    setIsAnswerLocked(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      
      // Update Safe Haven if at Q5 or Q15
      if (currentQuestionNumber === 5) {
        setLastSafeHavenEggs(50000);
      } else if (currentQuestionNumber === 15) {
        setLastSafeHavenEggs(250000);
      }
      
      // Check if this is Q25 (Legendary victory)
      if (currentQuestionNumber === 25) {
        handleLegendaryWin();
      } else {
        // Show success feedback then move to next question screen
        setGameState('showing-result');
        setTimeout(() => {
          setGameState('next-question');
        }, 1500);
      }
    } else {
      setIncorrectAnswers(prev => prev + 1);
      // Show failure feedback
      setGameState('showing-result');
      setTimeout(() => {
        handleFailure();
      }, 1500);
    }
  };

  const handleContinue = () => {
    // Move to next question
    const nextQuestionNumber = currentQuestionNumber + 1;
    const nextLevel = getLevelByQuestionNumber(nextQuestionNumber);
    
    setCurrentQuestionNumber(nextQuestionNumber);
    setSelectedAnswer(null);
    setIsAnswerLocked(false);
    setEliminatedOptions([]);
    setGameState('playing');
    setTimeRemaining(nextLevel?.timeLimit || 40);
  };

  const handleWalkAway = () => {
    // User chooses to walk away with current EGGs
    saveResults('walkaway', currentEggs);
    setShowWalkAwayPopup(true);
  };

  const handleFailure = () => {
    const eggsAwarded = getConsolationPrize(currentQuestionNumber);
    saveResults('failure', eggsAwarded);
    setShowFailurePopup(true);
  };

  const handleLegendaryWin = () => {
    saveResults('legendary', 1000000);
    setShowLegendaryPopup(true);
  };

  const saveResults = (outcome: OutcomeType, eggs: number) => {
    const rank = getRankFromEggs(eggs);
    const entry = {
      id: Date.now().toString(),
      callsign,
      eggs,
      rank,
      outcome,
      questionReached: currentQuestionNumber,
      correct: correctAnswers,
      incorrect: incorrectAnswers,
      date: new Date().toISOString(),
    };

    // Save to localStorage
    try {
      localStorage.setItem('stork-quiz-result', JSON.stringify(entry));
      console.log('Quiz results saved:', entry);
      
      // Update leaderboard
      const leaderboard = JSON.parse(localStorage.getItem('stork-leaderboard') || '[]');
      leaderboard.push(entry);
      localStorage.setItem('stork-leaderboard', JSON.stringify(leaderboard));
    } catch (error) {
      console.error('Error saving quiz results:', error);
    }
  };

  const handleClosePopup = () => {
    // Small delay to ensure localStorage is written
    setTimeout(() => {
      navigate('/debrief');
    }, 100);
  };

  if (!callsign || questions.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#B1FCF3] rounded-full blur-2xl opacity-50 animate-pulse" />
          <img 
            src={getRankLogo('PEEP')} 
            alt="Loading" 
            className="w-20 h-20 relative animate-bounce"
          />
        </div>
      </div>
    );
  }

  const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const showFeedback = gameState === 'showing-result';

  // Next Question Screen
  if (gameState === 'next-question') {
    const nextLevel = getLevelByQuestionNumber(currentQuestionNumber + 1);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <Card className="max-w-2xl w-full border-2 border-green-500/30 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-green-500/20 overflow-hidden animate-egg-hatch relative z-10">
          <CardContent className="p-8 sm:p-12 space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">✅</div>
              <h2 className="text-3xl sm:text-4xl font-black text-green-400 mb-4">Correct!</h2>
              <p className="text-xl text-white/70 mb-2">
                You have won <span className="font-black text-[#B1FCF3]">{currentEggs.toLocaleString()} EGGs</span>
              </p>
              <p className="text-lg text-white/50">
                The next question is for <span className="font-bold text-white">{nextLevel?.eggsValue.toLocaleString()} EGGs</span>
              </p>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                onClick={handleContinue}
                size="lg"
                className="h-16 text-lg font-black uppercase bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white transition-all duration-300 hover:scale-105 rounded-xl group"
              >
                <ArrowRight className="mr-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                Continue
              </Button>
              <Button
                onClick={handleWalkAway}
                size="lg"
                className="h-16 text-lg font-black uppercase bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-2 border-amber-500 hover:border-amber-400 transition-all duration-300 hover:scale-105 rounded-xl group"
              >
                <Trophy className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                Walk Away
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-3 sm:py-6 px-3 sm:px-4 pb-20 sm:pb-24 relative overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B1FCF312_1px,transparent_1px),linear-gradient(to_bottom,#B1FCF312_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#001240] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      {/* Level Character Image */}
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 pointer-events-none z-0 hidden sm:block">
        <img 
          src={getLevelImage(currentQuestionNumber)} 
          alt="Level Character"
          className="w-full h-full object-contain opacity-40 transition-all duration-1000 ease-in-out"
          style={{ filter: 'drop-shadow(0 0 20px rgba(177, 252, 243, 0.3))' }}
        />
      </div>

      {/* Background Music */}
      <audio ref={audioRef} src={hotSeatMusic} />

      {/* Music Control Button */}
      <button
        onClick={() => {
          if (!audioStarted && isMobile) {
            startAudio();
          } else {
            toggleMute();
          }
        }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 bg-[#001240]/80 backdrop-blur-xl border-2 border-[#B1FCF3]/30 rounded-full hover:bg-[#001240]/95 hover:border-[#B1FCF3]/50 transition-all duration-300 hover:scale-110 group shadow-lg shadow-[#B1FCF3]/20"
        aria-label={(!audioStarted && isMobile) ? 'Start music' : isMuted ? 'Unmute music' : 'Mute music'}
      >
        {(!audioStarted && isMobile) ? (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#B1FCF3] group-hover:text-white animate-pulse" />
        ) : isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-red-300" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#B1FCF3] group-hover:text-white" />
        )}
      </button>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-4">
          {/* Sidebar - EGGs Ladder */}
          <Card className="border-2 border-[#B1FCF3]/30 bg-[#001240]/80 backdrop-blur-xl shadow-2xl h-fit sticky top-4 hidden lg:block">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-black text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#B1FCF3]" />
                EGGs Ladder
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 space-y-1">
              {HOT_SEAT_LADDER.slice().reverse().map((level) => {
                const isCurrentQuestion = level.questionNumber === currentQuestionNumber;
                const isPassed = level.questionNumber < currentQuestionNumber;
                
                return (
                  <div
                    key={level.questionNumber}
                    className={cn(
                      "p-2 rounded-lg border transition-all",
                      isCurrentQuestion && "bg-[#B1FCF3]/20 border-[#B1FCF3] scale-105",
                      isPassed && "bg-green-500/10 border-green-500/30 opacity-60",
                      !isCurrentQuestion && !isPassed && "bg-black/50 border-[#B1FCF3]/20",
                      level.isSafeHaven && !isPassed && "border-green-500 animate-safe-haven-pulse"
                    )}
                  >
                    <div className="flex items-center justify-between text-xs gap-2">
                      <div className="flex items-center gap-1">
                        <span className={cn(
                          "font-bold",
                          isCurrentQuestion && "text-white",
                          isPassed && "text-green-400",
                          !isCurrentQuestion && !isPassed && "text-white/50"
                        )}>
                          Q{level.questionNumber}
                        </span>
                        {level.isSafeHaven && <Shield className="w-3 h-3 inline text-green-400" />}
                        {[5, 10, 15, 20, 25].includes(level.questionNumber) && (
                          <img 
                            src={getRankLogo(getRankFromEggs(level.eggsValue))} 
                            alt={`${getRankTitle(getRankFromEggs(level.eggsValue))} rank`}
                            className="w-4 h-4 inline ml-1"
                          />
                        )}
                      </div>
                      <span className={cn(
                        "font-black",
                        isCurrentQuestion && "text-[#B1FCF3]",
                        isPassed && "text-green-400",
                        !isCurrentQuestion && !isPassed && "text-white/40"
                      )}>
                        {level.eggsValue.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Main Quiz Area */}
          <div className="space-y-4 min-w-0 w-full">
            {/* Header */}
            <Card className="border-2 border-cyan-500/30 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
              <CardHeader className="py-2 sm:py-3 md:py-4 px-3 sm:px-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500 rounded-xl blur-lg opacity-50" />
                      <div className="relative p-1.5 sm:p-2 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl border border-[#B1FCF3]/30">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#B1FCF3]" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-sm sm:text-base md:text-lg font-black text-white">
                        Hot Seat Challenge
                      </CardTitle>
                      <CardDescription className="text-[10px] sm:text-xs text-white/50 font-medium">
                        Question {currentQuestionNumber} of 25
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Lifeline */}
                    <Button
                      onClick={handleLifeline}
                      disabled={lifelinesRemaining === 0 || eliminatedOptions.length > 0 || gameState !== 'playing'}
                      size="sm"
                      className={cn(
                        "font-black text-xs h-8 px-2 sm:px-3",
                        lifelinesRemaining > 0 ? "bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-[#B1FCF3]" : "opacity-50"
                      )}
                    >
                      <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      60:40 x{lifelinesRemaining}
                    </Button>
                    {/* Timer */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Clock className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5",
                        timeRemaining <= 10 ? "text-red-400" : "text-[#B1FCF3]"
                      )} />
                      <Badge
                        className={cn(
                          "text-lg sm:text-xl font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-xl",
                          timeRemaining <= 10
                            ? "bg-red-500/20 text-red-300 border-red-500/30 animate-timer-warning"
                            : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        )}
                      >
                        {timeRemaining}s
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Current Prize */}
                <div className="mt-2 sm:mt-3 text-center">
                  <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider mb-1">Playing For</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    {currentEggs.toLocaleString()} EGGs
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/50 mt-1">
                    {getRankTitle(currentRank)} • {currentLevel?.timeLimit}s Time Limit
                  </p>
                </div>
              </CardHeader>
            </Card>

            {/* Question Card */}
            <Card className="p-3 sm:p-4 md:p-6 border-2 border-red-500/30 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="space-y-3 sm:space-y-4 md:space-y-5 w-full">
                {/* Question */}
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 w-full min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <Badge className="text-[10px] sm:text-xs font-bold bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.5 rounded-lg">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                      {currentQuestion.category}
                    </Badge>
                    <Badge
                      className={cn(
                        "text-[10px] sm:text-xs font-bold uppercase px-2 py-0.5 rounded-lg",
                        currentQuestion.difficulty === 'hard' && "bg-red-500/20 text-red-300 border border-red-500/30",
                        currentQuestion.difficulty === 'medium' && "bg-amber-500/20 text-amber-300 border border-amber-500/30",
                        currentQuestion.difficulty === 'easy' && "bg-green-500/20 text-green-300 border border-green-500/30"
                      )}
                    >
                      {currentQuestion.difficulty}
                    </Badge>
                  </div>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white leading-tight break-words hyphens-auto overflow-wrap-anywhere w-full">
                    {currentQuestion.question}
                  </h2>
                </div>

                <Separator className="bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

                {/* Options */}
                <div className="space-y-2 sm:space-y-3 w-full min-w-0">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQuestion.correctAnswer;
                    const showCorrect = showFeedback && isCorrect;
                    const showIncorrect = showFeedback && isSelected && !isCorrect;
                    const isEliminated = eliminatedOptions.includes(index);

                    return (
                      <Button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showFeedback || isEliminated}
                        variant="outline"
                        size={undefined}
                        className={cn(
                          "group w-full h-auto max-h-none py-2.5 sm:py-3 md:py-4 px-2.5 sm:px-3 md:px-5 text-left justify-start text-sm sm:text-base font-semibold transition-all duration-300",
                          "border-2 rounded-xl overflow-visible whitespace-normal",
                          isEliminated && "opacity-30 cursor-not-allowed",
                          !showFeedback && !isEliminated && "border-slate-700 bg-slate-800/50 hover:border-cyan-500 hover:bg-cyan-500/10",
                          showCorrect && "border-green-500 bg-green-500/20",
                          showIncorrect && "border-red-500 bg-red-500/20",
                          isSelected && !showFeedback && "border-cyan-500 bg-cyan-500/20"
                        )}
                        style={{
                          minHeight: 'auto',
                          height: 'auto',
                          maxHeight: 'none',
                          whiteSpace: 'normal'
                        }}
                      >
                        <span className="flex items-start gap-1.5 sm:gap-2 md:gap-3 w-full min-w-0 max-w-full">
                          <span className={cn(
                            "flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm md:text-base font-black transition-all mt-0.5 sm:mt-0",
                            !showFeedback && !isEliminated && "border-slate-600 text-white/50 group-hover:border-cyan-400 group-hover:text-[#B1FCF3]",
                            showCorrect && "bg-green-500 border-green-500 text-white",
                            showIncorrect && "bg-red-500 border-red-500 text-white",
                            isSelected && !showFeedback && "border-cyan-400 text-[#B1FCF3]"
                          )}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span 
                            className={cn(
                              "flex-1 transition-colors min-w-0",
                              showCorrect && "text-white",
                              showIncorrect && "text-white",
                              !showFeedback && "text-slate-200 group-hover:text-white"
                            )}
                            style={{ 
                              wordBreak: 'break-word',
                              overflowWrap: 'break-word',
                              hyphens: 'auto',
                              lineHeight: '1.5',
                              maxWidth: '100%',
                              overflow: 'visible',
                              whiteSpace: 'normal'
                            }}
                          >
                            {option}
                          </span>
                          {showCorrect && (
                            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 animate-egg-hatch ml-1" />
                          )}
                          {showIncorrect && (
                            <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 animate-pulse ml-1" />
                          )}
                        </span>
                      </Button>
                    );
                  })}
                </div>

                {/* Final Answer Button */}
                {!showFeedback && (
                  <Button
                    onClick={handleFinalAnswer}
                    disabled={selectedAnswer === null}
                    size="lg"
                    className={cn(
                      "w-full h-12 sm:h-14 text-sm sm:text-base md:text-lg font-black uppercase transition-all duration-300",
                      selectedAnswer !== null
                        ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white hover:scale-105 animate-pulse"
                        : "bg-slate-700 text-white/50 cursor-not-allowed"
                    )}
                  >
                    {selectedAnswer !== null ? "...Is that your final answer?" : "Select an answer"}
                  </Button>
                )}

                {/* Feedback */}
                {showFeedback && (
                  <div className={cn(
                    "text-center py-4 sm:py-6 px-4 sm:px-8 rounded-xl font-black text-base sm:text-lg animate-egg-hatch shadow-xl",
                    isAnswerCorrect
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-300 border-2 border-green-500/40"
                      : "bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-300 border-2 border-red-500/40"
                  )}>
                    <div className="text-4xl sm:text-5xl mb-2 animate-bounce">
                      {isAnswerCorrect ? "🥚" : "❌"}
                    </div>
                    <div className="text-lg sm:text-xl">
                      {isAnswerCorrect ? "Correct! Moving to next question..." : "Incorrect! Returning to Safe Haven..."}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Popups */}
      {showFailurePopup && (
        <FailurePopup
          questionNumber={currentQuestionNumber}
          eggsAwarded={getConsolationPrize(currentQuestionNumber)}
          onClose={handleClosePopup}
        />
      )}
      {showWalkAwayPopup && (
        <WalkAwayPopup
          callsign={callsign}
          eggsWon={currentEggs}
          questionNumber={currentQuestionNumber}
          onClose={handleClosePopup}
        />
      )}
      {showLegendaryPopup && (
        <LegendaryPopup
          callsign={callsign}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Simulator;
