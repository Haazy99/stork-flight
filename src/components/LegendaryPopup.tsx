import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Twitter, Sparkles, Crown } from 'lucide-react';
import { getRankLogo } from '@/utils/rankLogos';

interface LegendaryPopupProps {
  callsign: string;
  onClose: () => void;
}

const LegendaryPopup = ({ callsign, onClose }: LegendaryPopupProps) => {
  const handleTweetLegendary = () => {
    const tweetText = `I just conquered the Stork Flight School Hot Seat. 25 questions. No lifelines left. 1,000,000 EGGs. I just became a Skymaster. @StorkOracle Come take your shot... if you think you can beat the final boss. ${window.location.origin}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in overflow-y-auto">
      {/* Confetti/Celebration Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full animate-confetti opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Card className="max-w-3xl w-full border-2 border-[#001240]/50 bg-[#B1FCF3]/95 backdrop-blur-xl shadow-2xl shadow-[#B1FCF3]/50 overflow-hidden animate-egg-hatch my-auto">
        {/* Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001240]/10 to-[#B1FCF3]/20 animate-pulse pointer-events-none" />
        
        <CardContent className="p-8 sm:p-12 space-y-8 relative">
          {/* Skymaster Logo with Crown and Glow */}
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-full blur-3xl opacity-50 animate-pulse" />
            </div>
            <div className="relative inline-flex items-center gap-4 justify-center mb-4">
              <img 
                src={getRankLogo('SKYMASTER')} 
                alt="Skymaster rank"
                className="w-24 h-24 drop-shadow-2xl animate-bounce"
              />
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 shadow-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>
                <Crown className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              <Trophy className="w-10 h-10 text-amber-400 animate-bounce" />
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-[#001240]/80 font-bold animate-fade-in">
                ...WE HAVE A NEW
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#001240] leading-tight">
                SKYMASTER!
              </h2>
            </div>
            <div className="inline-block px-6 py-2 bg-[#001240]/20 border-2 border-[#001240]/50 rounded-xl">
              <p className="text-xl sm:text-2xl font-black text-[#001240]">
                @{callsign}
              </p>
            </div>
          </div>

          {/* Victory Message */}
          <div className="bg-[#001240]/30 backdrop-blur-sm p-8 rounded-xl border-2 border-[#001240]/40 shadow-xl">
            <p className="text-base sm:text-lg text-[#001240] leading-relaxed text-center space-y-3 font-medium">
              <span className="block font-bold text-[#001240]">
                They said it was impossible. They said no one could clear the board.
              </span>
              <span className="block font-bold text-[#001240]">They were wrong.</span>
              <span className="block mt-4">
                You've done it. You didn't just play the game; you <span className="font-black">conquered it</span>.
              </span>
              <span className="block mt-4">
                You've proven you are in the <span className="font-black">1% of the 1%</span>.
              </span>
              <span className="block mt-4 text-xl font-black text-[#001240]">
                Welcome to the top, Skymaster.
              </span>
            </p>
          </div>

          {/* Final Score */}
          <Card className="border-2 border-[#001240]/40 bg-[#001240]/20 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 text-center">
              <p className="text-sm text-[#001240] uppercase tracking-wider mb-3 font-bold">
                Legendary Final Score
              </p>
              <div className="text-6xl sm:text-7xl font-black text-[#001240] mb-3">
                1,000,000
              </div>
              <p className="text-3xl font-bold text-[#001240] flex items-center justify-center gap-2">
                <span>EGGs</span>
                <span className="text-4xl">🏆</span>
              </p>
              <p className="text-sm text-[#001240]/80 mt-4 font-medium">
                25/25 Questions • Skymaster Rank • Hall of Fame
              </p>
            </CardContent>
          </Card>

          {/* Message */}
          <div className="text-center">
            <p className="text-base text-[#001240]/80 leading-relaxed font-medium">
              Your name will be recorded in the Flock's Hall of Fame.
              <br />
              Now, go show them how it's done.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <Button
              onClick={handleTweetLegendary}
              size="lg"
              className="h-16 text-lg font-black uppercase bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 rounded-xl group"
            >
              <Twitter className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              Tweet The Legendary Run
            </Button>
            <Button
              onClick={onClose}
              size="lg"
              className="h-16 text-lg font-black uppercase bg-slate-800 hover:bg-slate-700 text-white border-2 border-amber-500 hover:border-amber-400 transition-all duration-300 hover:scale-105 rounded-xl group"
            >
              <Trophy className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              View Results
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegendaryPopup;

