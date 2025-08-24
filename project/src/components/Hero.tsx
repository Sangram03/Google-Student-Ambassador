import { ArrowRight, Star, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Soft glowing background effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-md animate-bounce hover:scale-105 transition-transform duration-300 border border-blue-300/30">
              <Star className="w-4 h-4 text-yellow-500 animate-spin-slow" />
              <span className="animate-pulse">🚀 Limited Spots for Our College</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Be the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Face of Google
              </span>{" "}
              at
              <br />
              <span className="underline decoration-pink-500 decoration-4 underline-offset-4">
                BTES Campus
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              🌟 Imagine being recognized as a{" "}
              <b className="text-blue-700">Google Student Ambassador</b> in our college!
              Join the league of <b className="text-purple-700">5+ students</b> already accepted and
              become part of an exclusive community of innovators leading{" "}
              <b className="text-pink-700">AI & Gemini projects</b>.
              <br />
              <br />
              With my referral, you’ll get{" "}
              <b className="text-green-700">priority selection</b>,{" "}
              <b className="text-purple-700">Google-recognized mentorship</b>, and{" "}
              <b className="text-blue-700">career-boosting resources</b> that will set you apart. 🎓
              Let’s make our college a hub of Google-certified leaders!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() =>
                  document.getElementById("referral")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg shadow-purple-300/50"
              >
                <span className="text-lg font-semibold">
                  🔥 Scan the QR & Represent Our College
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="backdrop-blur-md bg-white/70 border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-200 text-lg font-medium shadow-sm"
              >
                🚀 Explore My AI Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">🎓 5+ Students Already Onboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">🏆 100% Selection Rate</span>
              </div>
            </div>
          </div>

          {/* Right Image + AI/Gemini GIF */}
          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl border border-purple-200/50">
              <img
                src="https://media.giphy.com/media/QTfX9Ejfra3ZmNxh6B/giphy.gif"
                alt="Gemini AI Animation"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg animate-fadeIn">
              <div className="text-2xl font-bold">AI</div>
              <div className="text-sm opacity-90">Leader</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-lg animate-fadeIn">
              <div className="text-2xl font-bold">Gemini</div>
              <div className="text-sm opacity-90">Visionary</div>
            </div>

            <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Star className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
