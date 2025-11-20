import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Twitter, X } from 'lucide-react';
import { getRankFromEggs, getRankTitle } from '@/types/quiz';
import { getRankLogo } from '@/utils/rankLogos';

interface WalkAwayPopupProps {
  callsign: string;
  eggsWon: number;
  questionNumber: number;
  onClose: () => void;
}

const WalkAwayPopup = ({ callsign, eggsWon, questionNumber, onClose }: WalkAwayPopupProps) => {
  const rank = getRankFromEggs(eggsWon);
  const rankTitle = getRankTitle(rank);

  const handleTweetScore = () => {
    const tweetText = `I just got ${eggsWon.toLocaleString()} EGGs and earned the rank of ${rankTitle} at the Stork Flight School Hot Seat! Think you can beat my score? @StorkOracle Come take the Hot Seat: ${window.location.origin}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in overflow-y-auto">
      <Card className="max-w-2xl w-full border-2 border-[#001240]/50 bg-[#B1FCF3]/95 backdrop-blur-xl shadow-2xl shadow-[#B1FCF3]/50 overflow-hidden animate-egg-hatch my-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001240]/10 to-[#B1FCF3]/20 pointer-events-none" />
        <CardContent className="p-8 sm:p-12 space-y-6 relative">
          {/* Rank Logo + Trophy Icon */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 justify-center mb-4">
              <img 
                src={getRankLogo(rank)} 
                alt={`${rankTitle} rank`}
                className="w-20 h-20 animate-bounce"
              />
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#001240] leading-tight">
              A Wise Choice, {rankTitle}!
            </h2>
            <p className="text-lg sm:text-xl text-[#001240]/80 font-bold">
              You've decided to walk away! That's a brilliant strategic move.
            </p>
          </div>

          {/* Stats Card */}
          <Card className="border-2 border-[#001240]/40 bg-[#001240]/20 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="text-center">
                <p className="text-sm text-[#001240] uppercase tracking-wider mb-2 font-bold">
                  You're leaving the Hot Seat with
                </p>
                <div className="text-5xl sm:text-6xl font-black text-[#001240]">
                  {eggsWon.toLocaleString()}
                </div>
                <p className="text-2xl font-bold text-[#001240] mt-2">EGGs!</p>
                <p className="text-sm text-[#001240]/80 mt-3 font-medium">
                  Successfully cleared <span className="font-black text-[#001240]">{questionNumber} questions</span>
                </p>
                <p className="text-sm text-[#001240]/80 font-medium">
                  Knowledge Rank: <span className="font-black text-[#001240]">{rankTitle}</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Message */}
          <div className="bg-[#001240]/30 backdrop-blur-sm p-6 rounded-xl border border-[#001240]/40">
            <p className="text-base sm:text-lg text-[#001240] leading-relaxed text-center font-medium">
              You've officially locked in your winnings. You played it smart. But this isn't the end of your run. This was just the practice round. We know a future Skymaster when we see one. Hit the docs, absorb the alpha from the Flock, and come back. That{' '}
              <span className="font-black text-[#001240]">1,000,000 EGG prize</span> is waiting for you.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <Button
              onClick={handleTweetScore}
              size="lg"
              className="h-14 text-base font-black uppercase bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white transition-all duration-300 hover:scale-105 rounded-xl group"
            >
              <Twitter className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Share My Score
            </Button>
            <Button
              onClick={onClose}
              size="lg"
              className="h-14 text-base font-black uppercase bg-slate-800 hover:bg-slate-700 text-white border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 hover:scale-105 rounded-xl group"
            >
              <X className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              I'll Be Back
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center pt-2">
            <p className="text-xs text-[#001240]/70 font-medium">
              Your score has been saved. View your rank on the leaderboard!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalkAwayPopup;

