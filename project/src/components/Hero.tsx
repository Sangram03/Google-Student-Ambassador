import { ArrowRight, Star, Users, Trophy, Sparkles, ChevronDown, Play, Award, Zap, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentStat, setCurrentStat] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const stats = [
    { icon: Users, value: "50+", label: "Students Selected", color: "text-cyan-400" },
    { icon: Trophy, value: "100%", label: "Success Rate", color: "text-yellow-400" },
    { icon: Award, value: "2025", label: "Google Partner", color: "text-green-400" }
  ];

  const rotatingWords = ["AI Leader", "Tech Pioneer", "Innovation Expert", "Future Builder"];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient orbs */}
        <div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            transition: 'transform 0.5s ease'
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePos.x * -0.025}px, ${mousePos.y * -0.025}px)`,
            transition: 'transform 0.5s ease',
            animationDelay: '1s'
          }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
            transition: 'transform 0.5s ease',
            animationDelay: '2s'
          }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 ? (
              <Star className="w-2 h-2 text-yellow-400" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-2 h-2 text-purple-400" />
            ) : (
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">

            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">

              {/* Animated Badge */}
              <div className="inline-flex mt-10 items-center  border-black space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg text-white px-6 py-3 rounded-full border  hover:scale-105 transition-all duration-300 cursor-pointer group shadow-lg shadow-cyan-500/25">
                <div className="relative ">
                  <Rocket className="w-5 h-5 text-cyan-400 animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="font-bold text-sm sm:text-base  bg-gradient-to-r from-black to-purple-300 bg-clip-text text-transparent">
                  🔥 Limited Spots - Apply Now!
                </span>
                <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
                  Become the{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Face of Google
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                  </span>
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  at{" "}
                  <span className="bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                    BTES Campus
                  </span>
                  <span className="inline-block animate-bounce ml-2">✨</span>
                </h2>

                {/* Rotating subtitle */}
                <div className="text-xl sm:text-2xl font-semibold text-black min-h-[2rem]">
                  Be an <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transition-all duration-500">
                    {rotatingWords[currentWord]}
                  </span>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="relative group border border-black border-r">
                <div className="absolute inset-0 bg-gradient-to-r    from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg  rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                  <p className="text-lg sm:text-xl text-black   leading-relaxed mb-6">
                    🌟 Join <span className="text-cyan-400 font-bold text-xl">500+ selected students</span> as a{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                      Google Student Ambassador
                    </span> and lead{" "}
                    <span className="text-pink-400 font-bold">AI & Gemini projects</span> at our campus!
                  </p>

                  <div className="grid grid-cols-2   sm:grid-cols-4 gap-3">
                    {[
                      { icon: "🎯", label: "Priority Selection" },
                      { icon: "🚀", label: "Google Mentorship" },
                      { icon: "💎", label: "Career Boost" },
                      { icon: "🌟", label: "Exclusive Access" }
                    ].map((benefit, index) => (
                      <div key={index} className="bg-gradient-to-r   from-purple-500/30 to-blue-500/30 backdrop-blur-sm text-white px-3 py-2 rounded-2xl text-sm font-medium border border-black hover:scale-105 transition-all duration-200 text-center group cursor-pointer">
                        <div className="text-lg group-hover:scale-125 transition-transform duration-200">{benefit.icon}</div>
                        <div className="text-xs">{benefit.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="relative border border-black group overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex  items-center justify-center space-x-3 z-10">
                    {/* CTA Button */}
                    <button
                      onClick={() =>
                        document.getElementById("referral")?.scrollIntoView({ behavior: "smooth" })
                      }
                     
                    >
                      <span >🔥 Get Referral QR Code</span>
                      
                    </button>

                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 animate-pulse opacity-50 rounded-2xl"></div>
                </button>

                <button className="backdrop-blur-lg bg-white/10 border-2 border-purple-400/50 text-black px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-purple-400 transition-all duration-300 font-semibold text-lg group">
                  <span className="group-hover:text-purple-300 transition-colors flex items-center justify-center space-x-2">
                    <span>🚀 View AI Projects</span>
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className="bg-gradient-to-r  border-black from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-6 border border-purple-400/30 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const isActive = currentStat === index;
                    return (
                      <div
                        key={index}
                        className={`text-center transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'scale-95 opacity-70'} hover:scale-105 cursor-pointer`}
                      >
                        <div className="relative">
                          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 ${stat.color} transition-all duration-300`} />
                          {isActive && <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-25"></div>}
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-black mb-1">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-black font-medium">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Media Panel */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">

                {/* Main Media Container */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-lg p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-2xl">
                    <div
                      className="relative cursor-pointer overflow-hidden rounded-2xl group-hover:scale-105 transition-all duration-500"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <img
                        src="https://media.giphy.com/media/QTfX9Ejfra3ZmNxh6B/giphy.gif"
                        alt="Gemini AI Innovation"
                        className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                          <Play className="w-12 h-12 text-white animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Badges - Now Properly Positioned */}
                <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 sm:p-5 rounded-2xl shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer border-2 border-yellow-300">
                  <div className="text-xl sm:text-2xl font-black">AI</div>
                  <div className="text-xs sm:text-sm font-bold opacity-80">Expert</div>
                  <Star className="absolute -top-1 -right-1 w-4 h-4 text-yellow-600 animate-spin" />
                </div>

                <div className="absolute -bottom-4 -left-4 z-20 bg-gradient-to-r from-green-400 to-emerald-500 text-white p-4 sm:p-5 rounded-2xl shadow-2xl hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-pointer border-2 border-green-300">
                  <div className="text-xl sm:text-2xl font-black">Gemini</div>
                  <div className="text-xs sm:text-sm font-bold opacity-90">Pioneer</div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-green-600 animate-pulse" />
                </div>

                <div className="absolute top-1/2 -right-6 sm:-right-8 z-20 bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 border border-green-400/50">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs sm:text-sm font-medium">Live Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
            <ChevronDown className="w-6 h-6 text-white/80" />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;