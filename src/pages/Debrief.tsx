import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getRankFromEggs, getRankTitle } from '@/types/quiz';
import type { Rank, OutcomeType, LeaderboardEntry } from '@/types/quiz';
import { Twitter, Trophy, Home, BarChart3, CheckCircle, XCircle, Sparkles, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getRankLogo } from '@/utils/rankLogos';

const Debrief = () => {
  const navigate = useNavigate();
  const [entry, setEntry] = useState<LeaderboardEntry | null>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem('stork-quiz-result');

    if (!storedResult) {
      navigate('/');
      return;
    }

    const result: LeaderboardEntry = JSON.parse(storedResult);
    setEntry(result);
  }, [navigate]);

  if (!entry) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <img 
          src={getRankLogo('PEEP')} 
          alt="Loading" 
          className="w-20 h-20 animate-bounce"
        />
      </div>
    );
  }

  const handleTweet = () => {
    let tweetText = '';
    
    if (entry.outcome === 'legendary') {
      tweetText = `I just conquered the Stork Flight School Hot Seat. 25 questions. No lifelines left. 1,000,000 EGGs. I just became a Skymaster. @StorkOracle Come take your shot... if you think you can beat the final boss. ${window.location.origin}`;
    } else if (entry.outcome === 'walkaway') {
      tweetText = `I just got ${entry.eggs.toLocaleString()} EGGs and earned the rank of ${getRankTitle(entry.rank)} at the Stork Flight School Hot Seat! Think you can beat my score? @StorkOracle Come take the Hot Seat: ${window.location.origin}`;
    } else {
      tweetText = `I just completed the Stork Flight School Hot Seat and earned ${entry.eggs.toLocaleString()} EGGs (${getRankTitle(entry.rank)} rank)! Think you can do better? @StorkOracle ${window.location.origin}`;
    }
    
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  const getHeaderContent = () => {
    if (entry.outcome === 'legendary') {
      return {
        icon: (
          <div className="flex items-center gap-3">
            <img 
              src={getRankLogo('SKYMASTER')} 
              alt="Skymaster rank" 
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
        ),
        iconBg: 'from-amber-500 via-yellow-500 to-amber-500',
        iconBlur: 'from-amber-500 via-yellow-500 to-amber-500',
        badge: 'Legendary Victory',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        title: '...WE HAVE A NEW SKYMASTER!',
        subtitle: 'You conquered the board. You are a legend.',
      };
    } else if (entry.outcome === 'walkaway') {
      return {
        icon: (
          <div className="flex items-center gap-3">
            <img 
              src={getRankLogo(entry.rank)} 
              alt={`${getRankTitle(entry.rank)} rank`}
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
        ),
        iconBg: 'from-amber-500 to-orange-600',
        iconBlur: 'from-amber-500 via-orange-500 to-yellow-500',
        badge: 'Strategic Victory',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        title: `A Wise Choice, ${getRankTitle(entry.rank)}!`,
        subtitle: "You played it smart and secured your winnings.",
      };
    } else {
      return {
        icon: (
          <img 
            src={getRankLogo(entry.rank)} 
            alt={`${getRankTitle(entry.rank)} rank`}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
        ),
        iconBg: 'from-[#B1FCF3] to-white',
        iconBlur: 'from-[#B1FCF3] to-white',
        badge: 'Challenge Complete',
        badgeColor: 'bg-[#B1FCF3]/20 text-[#B1FCF3] border-[#B1FCF3]/30',
        title: entry.eggs >= 50000 ? `Incredible Run, ${getRankTitle(entry.rank)}!` : 'Better Luck Next Time!',
        subtitle: entry.eggs >= 50000 ? 'You made it to a Safe Haven!' : 'Study up and come back stronger!',
      };
    }
  };

  const getRankBadgeStyle = (currentRank: Rank) => {
    const styles = {
      PEEP: 'bg-[#001240] text-white',
      WINGED: 'bg-gradient-to-r from-[#B1FCF3] to-white text-[#001240]',
      SONGBIRD: 'bg-gradient-to-r from-[#B1FCF3] to-white text-[#001240]',
      WAYFINDER: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
      SKYMASTER: 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white border-2 border-amber-400'
    };
    return styles[currentRank];
  };

  const header = getHeaderContent();
  const showConfetti = entry.eggs > 0; // Show confetti if user earned any EGGs (attained a rank)

  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B1FCF312_1px,transparent_1px),linear-gradient(to_bottom,#B1FCF312_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                backgroundColor: ['#B1FCF3', '#FFD700', '#FF6B6B', '#4ECDC4', '#FFA500', '#FF1493'][Math.floor(Math.random() * 6)],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#001240] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className={cn("absolute inset-0 bg-gradient-to-r rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse", header.iconBlur)} />
              <div className={cn("relative bg-gradient-to-br p-6 sm:p-8 rounded-full shadow-2xl border-2 border-amber-400/50", header.iconBg)}>
                {header.icon}
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <Badge className={cn("mb-2 px-4 py-1.5 border", header.badgeColor)}>
              <Sparkles className="w-4 h-4 mr-1.5" />
              {header.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {header.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-medium">
              {header.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Sparkles className="w-5 h-5 text-[#B1FCF3] animate-pulse" />
            <Separator className="w-32 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <Trophy className="w-5 h-5 text-amber-400 animate-pulse" />
          </div>
        </div>

        {/* Main Results Card */}
        <Card className="border-2 border-purple-500/30 mb-6 sm:mb-8 animate-fade-in shadow-2xl shadow-purple-500/20 overflow-hidden bg-slate-900/80 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
          <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 relative">
            {/* Flock Name */}
            <div className="text-center">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-3 font-bold text-slate-400">
                Flock Name
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-[#B1FCF3]/20 rounded-xl border border-[#B1FCF3]/30">
                  <img 
                    src={getRankLogo(entry.rank)} 
                    alt={`${getRankTitle(entry.rank)} rank`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-[#B1FCF3] to-white bg-clip-text text-transparent">
                  @{entry.callsign}
                </span>
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {/* Score Display */}
            <div className="text-center">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-4 font-bold text-slate-400">
                Final Score
              </p>
              <Card className="relative overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-500/20 bg-slate-800/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10" />
                <CardContent className="py-8 sm:py-10 md:py-12 relative">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-egg-hatch mb-3">
                    {entry.eggs.toLocaleString()}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-white/70 font-bold">
                    <span>EGGs</span>
                    <span className="text-3xl sm:text-4xl animate-bounce">🥚</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {/* Rank Achievement */}
            <div className="text-center space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-wider font-bold text-slate-400">
                Knowledge Rank Achieved
              </p>
              <div className="inline-block">
                <Badge className={cn(
                  "text-3xl sm:text-4xl md:text-5xl py-3 sm:py-4 px-8 sm:px-10 font-black uppercase tracking-wider shadow-2xl rounded-xl",
                  getRankBadgeStyle(entry.rank)
                )}>
                  {entry.rank}
                </Badge>
              </div>
              <div className="pt-4">
                <Card className="border-2 border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm">
                  <CardContent className="py-4">
                    <p className="text-sm text-white/70">
                      <span className="font-bold text-white">Questions Reached: </span>
                      <span className="font-black text-cyan-300">{entry.questionReached} / 25</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {/* Performance Stats */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-2 border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-sm font-black text-green-300">Correct Answers</p>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-green-400">{entry.correct}</div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-500/30 bg-red-500/10 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <p className="text-sm font-black text-red-300">Incorrect Answers</p>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-red-400">{entry.incorrect}</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <Button
            onClick={handleTweet}
            size="lg"
            className="h-14 sm:h-16 text-base sm:text-lg font-black uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/50 rounded-xl group"
          >
            <Twitter className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Tweet Score
          </Button>
          <Button
            onClick={() => navigate('/leaderboard')}
            size="lg"
            className="h-14 sm:h-16 text-base sm:text-lg font-black uppercase tracking-wider bg-slate-800/80 hover:bg-slate-700/80 text-white border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-xl group backdrop-blur-sm"
          >
            <BarChart3 className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            View Ranks
          </Button>
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="h-14 sm:h-16 text-base sm:text-lg font-black uppercase tracking-wider bg-slate-800/80 hover:bg-slate-700/80 text-white border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl rounded-xl group backdrop-blur-sm sm:col-span-2 md:col-span-1"
          >
            <Home className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Debrief;
