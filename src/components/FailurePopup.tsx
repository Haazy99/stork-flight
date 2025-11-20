import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { XCircle, BookOpen, MessageCircle } from 'lucide-react';

interface FailurePopupProps {
  questionNumber: number;
  eggsAwarded: number;
  onClose: () => void;
}

const FailurePopup = ({ questionNumber, eggsAwarded, onClose }: FailurePopupProps) => {
  const getFailureMessage = () => {
    // Q1-Q4: No Safe Haven yet
    if (questionNumber <= 4) {
      return {
        header: 'Ouch. Out of the Hot Seat.',
        body: "That's not it. You're leaving the hot seat with 0 EGGs (consolation: 5,000). Don't worry, the greats study the most. Hit the docs, get active in the community, and come back stronger!",
        emoji: '💔',
      };
    }
    
    // Q5: The Consolation Prize
    if (questionNumber === 5) {
      return {
        header: 'So Close!',
        body: "That wasn't the one. You've been knocked out of the Hot Seat, but you're walking away with the consolation prize of 5,000 EGGs. You're on the right track! Study the alpha on X and Discord, and try again for that first Safe Haven!",
        emoji: '😔',
      };
    }
    
    // Q6-Q14: Fell back to Peep Safe Haven
    if (questionNumber >= 6 && questionNumber <= 14) {
      return {
        header: 'A Noble Effort, Winged!',
        body: "That's incorrect. You're out of the Hot Seat, but you made it past the first Safe Haven! You fall back to your Peep Rank winnings of 50,000 EGGs. You clearly know your stuff. Brush up on the deeper alpha and come back for that Songbird rank!",
        emoji: '🥚',
      };
    }
    
    // Q15: Failed at Safe Haven 2
    if (questionNumber === 15) {
      return {
        header: 'So Close to Greatness!',
        body: "That's not it. You were at the second Safe Haven! You're going home with 50,000 EGGs from your last checkpoint. You're a true Stork enthusiast. Dive deeper into the docs and come back for that 250,000 EGG prize!",
        emoji: '😢',
      };
    }
    
    // Q16-Q25: Fell back to Songbird Safe Haven
    return {
      header: 'Incredible Run, Wayfinder!',
      body: "That's not the one. You were deep in the Hot Seat, but you're going home with your Songbird Rank winnings of 250,000 EGGs! This is an elite score. You're a true Stork Maxi. Get active on X, dive into the docs, and come back for that 1M EGG prize!",
      emoji: '🐦',
    };
  };

  const message = getFailureMessage();

  const handleStudyDocs = () => {
    window.open('https://docs.stork.network/', '_blank');
  };

  const handleBackToDiscord = () => {
    window.open('https://discord.gg/storkoracle', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in overflow-y-auto">
      <Card className="max-w-2xl w-full border-2 border-[#001240]/50 bg-[#B1FCF3]/95 backdrop-blur-xl shadow-2xl shadow-[#B1FCF3]/50 overflow-hidden animate-egg-hatch my-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001240]/10 to-[#B1FCF3]/20 pointer-events-none" />
        <CardContent className="p-8 sm:p-12 space-y-6 relative">
          {/* Emoji */}
          <div className="text-center">
            <div className="text-7xl sm:text-8xl mb-4 animate-bounce">{message.emoji}</div>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001240] leading-tight">
              {message.header}
            </h2>
            {eggsAwarded > 0 && (
              <div className="inline-block px-6 py-2 bg-[#001240]/20 border border-[#001240]/30 rounded-xl">
                <p className="text-xl sm:text-2xl font-black text-[#001240]">
                  {eggsAwarded.toLocaleString()} EGGs
                </p>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="bg-[#001240]/30 backdrop-blur-sm p-6 rounded-xl border border-[#001240]/40">
            <p className="text-base sm:text-lg text-[#001240] leading-relaxed text-center font-medium">
              {message.body}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <Button
              onClick={handleStudyDocs}
              size="lg"
              className="h-14 text-base font-black uppercase bg-gradient-to-r from-[#B1FCF3] to-white hover:from-white hover:to-[#B1FCF3] text-[#001240] transition-all duration-300 hover:scale-105 rounded-xl group"
            >
              <BookOpen className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Study the Docs
            </Button>
            <Button
              onClick={handleBackToDiscord}
              size="lg"
              className="h-14 text-base font-black uppercase bg-[#001240] hover:bg-[#001240]/80 text-white border-2 border-[#B1FCF3]/30 hover:border-[#B1FCF3] transition-all duration-300 hover:scale-105 rounded-xl group"
            >
              <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Back to Discord
            </Button>
          </div>

          {/* Close Button */}
          <div className="text-center pt-4">
            <Button
              onClick={onClose}
              variant="ghost"
              className="text-[#001240]/70 hover:text-[#001240] transition-colors font-bold"
            >
              View Results →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FailurePopup;

