import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Rank, LeaderboardEntry } from '@/types/quiz';
import { Trophy, Medal, Award, Home, Crown, Star, Zap, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { getRankLogo } from '@/utils/rankLogos';

const Leaderboard = () => {
  const navigate = useNavigate();
  const [selectedRank, setSelectedRank] = useState<Rank>('SKYMASTER');
  const [leaderboardData, setLeaderboardData] = useState<Record<Rank, LeaderboardEntry[]>>({
    PEEP: [],
    WINGED: [],
    SONGBIRD: [],
    WAYFINDER: [],
    SKYMASTER: [],
  });

  useEffect(() => {
    // Load leaderboard data from localStorage
    const storedLeaderboard = localStorage.getItem('stork-leaderboard');
    if (storedLeaderboard) {
      const allEntries: LeaderboardEntry[] = JSON.parse(storedLeaderboard);
      
      // Remove duplicates - keep only the most recent entry for each unique combination
      const uniqueEntries = new Map<string, LeaderboardEntry>();
      
      allEntries.forEach(entry => {
        // Create a unique key based on callsign, eggs, questionReached, and outcome
        const key = `${entry.callsign}-${entry.eggs}-${entry.questionReached}-${entry.outcome}`;
        const existing = uniqueEntries.get(key);
        
        // Keep the most recent entry if duplicate found
        if (!existing || new Date(entry.date) > new Date(existing.date)) {
          uniqueEntries.set(key, entry);
        }
      });
      
      // Convert back to array
      const deduplicatedEntries = Array.from(uniqueEntries.values());
      
      // Save deduplicated entries back to localStorage
      if (deduplicatedEntries.length !== allEntries.length) {
        localStorage.setItem('stork-leaderboard', JSON.stringify(deduplicatedEntries));
      }
      
      // Group by rank
      const grouped: Record<Rank, LeaderboardEntry[]> = {
        PEEP: [],
        WINGED: [],
        SONGBIRD: [],
        WAYFINDER: [],
        SKYMASTER: [],
      };

      deduplicatedEntries.forEach(entry => {
        grouped[entry.rank].push(entry);
      });

      // Sort each rank by eggs descending
      Object.keys(grouped).forEach(rank => {
        grouped[rank as Rank].sort((a, b) => b.eggs - a.eggs);
      });

      setLeaderboardData(grouped);
    }
  }, []);

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 2:
        return <Medal className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />;
      case 3:
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />;
      default:
        return <span className="text-slate-400 font-bold text-sm sm:text-base">#{position}</span>;
    }
  };

  const getRankColor = (rank: Rank) => {
    const colors = {
      SKYMASTER: 'from-amber-500 via-yellow-500 to-amber-500',
      WAYFINDER: 'from-orange-500 via-amber-500 to-orange-500',
      SONGBIRD: 'from-blue-500 via-purple-500 to-blue-500',
      WINGED: 'from-cyan-500 via-blue-500 to-cyan-500',
      PEEP: 'from-slate-600 via-slate-500 to-slate-600',
    };
    return colors[rank];
  };

  const getRankIcon = (rank: Rank) => {
    return (
      <img 
        src={getRankLogo(rank)} 
        alt={`${rank} rank`}
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    );
  };

  const getRankDescription = (rank: Rank) => {
    const descriptions = {
      SKYMASTER: 'The Elite 1% - 600,000+ EGGs',
      WAYFINDER: 'Master Navigators - 300,000+ EGGs',
      SONGBIRD: 'Skilled Players - 150,000+ EGGs',
      WINGED: 'Rising Stars - 60,000+ EGGs',
      PEEP: 'New Challengers - Up to 59,999 EGGs',
    };
    return descriptions[rank];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-black py-6 sm:py-8 md:py-12 px-3 sm:px-4 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#001240] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 animate-fade-in">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-4 sm:p-6 md:p-8 rounded-full shadow-2xl border-2 border-amber-400/50">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white" />
              </div>
            </div>
          </div>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <Badge className="mb-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
              Hall of Ranks
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Leaderboard
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-medium px-4">
              The best of the best, ranked by tier.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Card className="border-2 border-[#B1FCF3]/30 shadow-2xl shadow-purple-500/20 overflow-hidden bg-[#001240]/80 backdrop-blur-xl animate-fade-in">
          <CardHeader className="pb-3 sm:pb-4 pt-4 sm:pt-6">
            <CardTitle className="text-lg sm:text-xl md:text-2xl font-black text-white text-center">
              Select Rank Tier
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 md:p-6">
            <Tabs value={selectedRank} onValueChange={(value) => setSelectedRank(value as Rank)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto p-1 sm:p-1.5 bg-black/50 gap-1.5 sm:gap-1">
                {(['PEEP', 'WINGED', 'SONGBIRD', 'WAYFINDER', 'SKYMASTER'] as Rank[]).map((rank) => (
                  <TabsTrigger
                    key={rank}
                    value={rank}
                    className={cn(
                      "flex flex-col items-center gap-1 sm:gap-1.5 py-3 sm:py-3 px-2 rounded-lg transition-all",
                      "data-[state=active]:bg-gradient-to-br data-[state=active]:text-white data-[state=active]:shadow-lg",
                      selectedRank === rank && getRankColor(rank)
                    )}
                  >
                    {getRankIcon(rank)}
                    <span className="text-[10px] sm:text-xs lg:text-sm font-black whitespace-nowrap">{rank}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {(['PEEP', 'WINGED', 'SONGBIRD', 'WAYFINDER', 'SKYMASTER'] as Rank[]).map((rank) => (
                <TabsContent key={rank} value={rank} className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  {/* Rank Description */}
                  <div className="text-center mb-4 sm:mb-6">
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 px-2">{getRankDescription(rank)}</p>
                  </div>

                  <Separator className="bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                  {/* Leaderboard Entries */}
                  {leaderboardData[rank].length > 0 ? (
                    <div className="space-y-2 sm:space-y-3">
                      {leaderboardData[rank].map((entry, index) => (
                        <Card
                          key={entry.id}
                          className={cn(
                            "border-2 transition-all duration-300 hover:scale-[1.02]",
                            index === 0 && "border-amber-500/50 bg-amber-500/10 shadow-lg shadow-amber-500/20",
                            index === 1 && "border-slate-500/50 bg-slate-500/10 shadow-lg shadow-slate-500/20",
                            index === 2 && "border-amber-700/50 bg-amber-700/10 shadow-lg shadow-amber-700/20",
                            index > 2 && "border-slate-700 bg-black/50"
                          )}
                        >
                          <CardContent className="p-3 sm:p-4 md:p-6">
                            <div className="flex items-center justify-between gap-2 sm:gap-4">
                              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                                {/* Position */}
                                <div className="flex-shrink-0">
                                  {getPositionIcon(index + 1)}
                                </div>

                                {/* Flock Name */}
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm sm:text-base md:text-lg font-black text-white truncate">
                                    @{entry.callsign}
                                  </p>
                                  <p className="text-[10px] sm:text-xs text-slate-400">
                                    Q{entry.questionReached} • {entry.correct} correct
                                  </p>
                                </div>
                              </div>

                              {/* Score */}
                              <div className="text-right flex-shrink-0">
                                <p className="text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                  {entry.eggs.toLocaleString()}
                                </p>
                                <p className="text-[10px] sm:text-xs text-slate-400">EGGs</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <img 
                        src={getRankLogo(selectedRank)} 
                        alt={`${selectedRank} rank`}
                        className="w-16 h-16 mx-auto mb-4 opacity-30"
                      />
                      <p className="text-slate-400 text-lg font-medium">
                        No challengers in this tier yet
                      </p>
                      <p className="text-slate-500 text-sm mt-2">
                        Be the first to claim this rank!
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center mt-6 sm:mt-8">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-black uppercase tracking-wider bg-slate-800/80 hover:bg-slate-700/80 text-white border-2 border-[#B1FCF3]/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 rounded-xl group backdrop-blur-sm px-6 sm:px-8"
          >
            <Home className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
