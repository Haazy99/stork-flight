import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Bird, Sparkles, Trophy, Zap } from 'lucide-react';
import storkLogo from '@/assets/stork-logo.png';
import floatingBird from '@/assets/floating-bird.png';

const Hangar = () => {
  const [callsign, setCallsign] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (callsign.trim()) {
      localStorage.setItem('stork-callsign', callsign.trim());
      navigate('/hotseat-intro');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#B1FCF312_1px,transparent_1px),linear-gradient(to_bottom,#B1FCF312_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#001240] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#B1FCF3] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

      {/* Floating Birds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-40">
          <img src={floatingBird} alt="" className="w-16 h-16" />
        </div>
        <div className="absolute bottom-32 right-20 animate-float opacity-40" style={{ animationDelay: '1s' }}>
          <img src={floatingBird} alt="" className="w-14 h-14" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-40" style={{ animationDelay: '2s' }}>
          <img src={floatingBird} alt="" className="w-20 h-20" />
        </div>
      </div>

      <div className="max-w-4xl w-full px-6 z-10">
        <div className="text-center space-y-10 animate-fade-in">
          {/* Logo/Icon with Enhanced Glow */}
          <div className="flex justify-center pt-12 sm:pt-16 md:pt-20 pb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#B1FCF3] rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative flex items-center justify-center px-4">
                <img 
                  src={storkLogo} 
                  alt="Stork Flight School Logo" 
                  className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto relative z-10 drop-shadow-2xl object-contain"
                />
              </div>
            </div>
          </div>

          {/* Hero Text with Better Typography */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#001240]/50 rounded-full border border-[#B1FCF3]/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#B1FCF3] animate-pulse" />
              <span className="text-sm font-bold text-[#B1FCF3] uppercase tracking-wider">
                Prove Your Stork Mastery
              </span>
              <Trophy className="w-5 h-5 text-[#B1FCF3] animate-pulse" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                Welcome to the
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#B1FCF3] to-white bg-clip-text text-transparent leading-[1.1] animate-gradient-x">
                Stork Flight School
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
              Test your knowledge. Prove your rank.{' '}
              <span className="text-white font-bold bg-gradient-to-r from-[#B1FCF3] to-white bg-clip-text text-transparent">
                Let's fly.
              </span>
            </p>
          </div>

          {/* Enhanced Flock Name Input Card */}
          <Card className="max-w-lg mx-auto bg-[#001240]/80 backdrop-blur-xl border-2 border-[#B1FCF3]/30 shadow-2xl shadow-[#B1FCF3]/20 hover:shadow-[#B1FCF3]/40 transition-all duration-300">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <Label 
                  htmlFor="callsign" 
                  className="text-base font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5 text-[#B1FCF3]" />
                  Enter Your Flock Name
                </Label>
                <div className="relative">
                  <Input
                    id="callsign"
                    type="text"
                    placeholder="Your X Username"
                    value={callsign}
                    onChange={(e) => setCallsign(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                    className="h-16 text-xl text-center font-semibold bg-black/50 border-2 border-[#B1FCF3]/30 focus:border-[#B1FCF3] text-white placeholder:text-white/40 transition-all shadow-inner focus:shadow-[#B1FCF3]/20 rounded-xl"
                    autoFocus
                  />
                </div>
                <p className="text-sm text-white/60 text-center flex items-center justify-center gap-2">
                  <Bird className="w-4 h-4" />
                  Use your X (Twitter) username
                </p>
              </div>

              <Button
                onClick={handleStart}
                disabled={!callsign.trim()}
                size="lg"
                className="w-full h-16 text-xl font-black uppercase tracking-wider bg-gradient-to-r from-[#B1FCF3] to-white hover:from-white hover:to-[#B1FCF3] text-[#001240] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#B1FCF3]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-xl"
              >
                Let's GMORK
                <Plane className="ml-3 w-6 h-6" />
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Info Text */}
          <div className="text-center space-y-3 pt-4">
            <p className="text-xl font-bold text-white">
              "How Storkified are you?"
            </p>
            <p className="text-base text-white/60 flex items-center justify-center gap-2">
              GMORK and let's prove it. 
              <span className="text-2xl animate-bounce inline-block">🥚</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hangar;
