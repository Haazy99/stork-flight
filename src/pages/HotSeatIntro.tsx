import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trophy, Clock, Shield, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { getRankLogo } from '@/utils/rankLogos';
import floatingBird from '@/assets/floating-bird.png';
import hotSeatBg from '@/assets/hotseat-bg.jpg';

const HotSeatIntro = () => {
  const navigate = useNavigate();
  const [callsign, setCallsign] = useState('');

  useEffect(() => {
    const storedCallsign = localStorage.getItem('stork-callsign');
    if (!storedCallsign) {
      navigate('/');
    } else {
      setCallsign(storedCallsign);
    }
  }, [navigate]);

  const handleStartChallenge = () => {
    navigate('/simulator');
  };

  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B1FCF312_1px,transparent_1px),linear-gradient(to_bottom,#B1FCF312_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hotSeatBg} 
          alt="Hot Seat Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#001240] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#B1FCF3] rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative bg-gradient-to-br from-[#001240] to-black p-6 sm:p-8 rounded-full shadow-2xl border-2 border-[#B1FCF3]/50">
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-[#B1FCF3]" />
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <Badge className="mb-2 bg-[#B1FCF3]/20 text-[#B1FCF3] border border-[#B1FCF3]/30 px-4 py-1.5 text-sm sm:text-base">
              <Sparkles className="w-4 h-4 mr-1.5" />
              Welcome, {callsign}
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
              Stork Flight School:
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#B1FCF3] to-white bg-clip-text text-transparent leading-tight animate-gradient-x">
              THE HOT SEAT
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium max-w-3xl mx-auto mt-4">
              This isn't a test. This is the Hot Seat. Prove your alpha.
            </p>
          </div>
        </div>

        {/* Main Rules Card */}
        <Card className="border-2 border-[#B1FCF3]/30 mb-6 sm:mb-8 animate-fade-in shadow-2xl shadow-[#B1FCF3]/20 overflow-hidden bg-[#001240]/80 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B1FCF3]/5 to-transparent pointer-events-none" />
          <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 relative">
            {/* The Goal */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B1FCF3]/20 rounded-xl border border-[#B1FCF3]/30">
                  <Trophy className="w-6 h-6 text-[#B1FCF3]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">The Goal</h2>
              </div>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Climb the <span className="font-bold text-white">25-question ladder</span> to earn up to{' '}
                <span className="font-black text-[#B1FCF3]">1,000,000 EGGs</span> and the legendary title of{' '}
                <span className="font-black bg-gradient-to-r from-[#B1FCF3] to-white bg-clip-text text-transparent">
                  Skymaster
                </span>
                .
              </p>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-[#B1FCF3]/30 to-transparent" />

            {/* The Rules */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#B1FCF3]/20 rounded-xl border border-[#B1FCF3]/30">
                  <Shield className="w-6 h-6 text-[#B1FCF3]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">The Rules</h2>
              </div>

              <div className="grid gap-4">
                {/* Rule 1 */}
                <Card className="border border-[#B1FCF3]/20 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B1FCF3]/20 border border-[#B1FCF3]/30 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-[#B1FCF3]" />
                      </div>
                      <div>
                        <h3 className="font-black text-white mb-1">1. Every question is on a timer</h3>
                        <p className="text-sm text-white/70">
                          Questions get <span className="font-bold text-red-400">progressively faster</span>: 50s → 45s → 40s → 35s → 25s. Run out of time, and you <span className="font-bold">lose</span>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rule 2 */}
                <Card className="border border-[#B1FCF3]/20 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                        <span className="text-lg font-black text-red-400">✗</span>
                      </div>
                      <div>
                        <h3 className="font-black text-white mb-1">2. Answer wrong = Fall back to last Safe Haven</h3>
                        <p className="text-sm text-white/70">
                          One mistake sends you back. No second chances.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rule 3 */}
                <Card className="border border-[#B1FCF3]/20 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B1FCF3]/20 border border-[#B1FCF3]/30 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-[#B1FCF3]" />
                      </div>
                      <div>
                        <h3 className="font-black text-white mb-1">3. You can "Walk Away" after any correct answer</h3>
                        <p className="text-sm text-white/70">
                          Keep your EGGs safe. It's <span className="font-bold text-[#B1FCF3]">strategic banking</span>, not quitting.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rule 4 */}
                <Card className="border border-[#B1FCF3]/20 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#B1FCF3]/20 border border-[#B1FCF3]/30 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-[#B1FCF3]" />
                      </div>
                      <div>
                        <h3 className="font-black text-white mb-1">4. You have two (2) '60:40' lifelines</h3>
                        <p className="text-sm text-white/70">
                          Use them wisely. Each removes <span className="font-bold">2 wrong options</span>, leaving 3 choices.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-[#B1FCF3]/30 to-transparent" />

            {/* Safe Havens */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-xl border border-green-500/30">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">The Safe Havens</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Safe Haven 1 */}
                <Card className="border-2 border-[#B1FCF3]/30 bg-[#B1FCF3]/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <img 
                        src={getRankLogo('PEEP')} 
                        alt="Peep rank" 
                        className="w-16 h-16 drop-shadow-lg"
                      />
                    </div>
                    <h3 className="font-black text-[#B1FCF3] text-lg mb-1">Question 5 (Peep)</h3>
                    <p className="text-2xl font-black text-white">50,000 EGGs</p>
                    <p className="text-xs text-white/60 mt-2">First Safety Net</p>
                  </CardContent>
                </Card>

                {/* Safe Haven 2 */}
                <Card className="border-2 border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      <img 
                        src={getRankLogo('SONGBIRD')} 
                        alt="Songbird rank" 
                        className="w-16 h-16 drop-shadow-lg"
                      />
                    </div>
                    <h3 className="font-black text-green-300 text-lg mb-1">Question 15 (Songbird)</h3>
                    <p className="text-2xl font-black text-white">250,000 EGGs</p>
                    <p className="text-xs text-white/60 mt-2">Second Safety Net</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <div className="text-center animate-fade-in">
          <Button
            onClick={handleStartChallenge}
            size="lg"
            className="h-16 sm:h-20 text-xl sm:text-2xl font-black uppercase tracking-wider px-12 sm:px-16 bg-gradient-to-r from-[#B1FCF3] to-white hover:from-white hover:to-[#B1FCF3] text-[#001240] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#B1FCF3]/50 rounded-xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <img 
              src={floatingBird} 
              alt="Stork" 
              className="mr-3 w-7 h-7 group-hover:scale-110 transition-transform"
            />
            TAKE THE HOT SEAT
            <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </Button>
          <p className="text-white/60 mt-4 text-sm sm:text-base">
            The clock starts now. Good luck, {callsign}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotSeatIntro;

