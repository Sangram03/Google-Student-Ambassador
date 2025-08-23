import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md animate-bounce hover:scale-105 transition-transform duration-300">
              <Star className="w-4 h-4 text-yellow-500 animate-spin-slow" />
              <span className="animate-pulse">🚀 Limited Spots for Our College</span>
            </div>


            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Be the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Face of Google</span> at
              <br /> <span className="underline decoration-purple-500">BTES Campus</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              🌟 Imagine being recognized as a <b>Google Student Ambassador</b> in our college!
              Join the league of <b>5+ students</b> already accepted and become part of an exclusive community of
              innovators leading <b>AI & Gemini projects</b>.
              <br /><br />
              With my referral, you’ll get <b>priority selection</b>, <b>Google-recognized mentorship</b>, and
              <b>career-boosting resources</b> that will set you apart.
              🎓 Let’s make our college a hub of Google-certified leaders!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => document.getElementById('referral')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group shadow-lg"
              >
                <span className="text-lg font-semibold">🔥 Scan the Qr & Represent Our College</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-purple-600 hover:text-purple-600 transition-all duration-200 text-lg font-medium shadow-sm"
              >
                🚀 Explore My AI Projects
              </button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-gray-600">🎓 5+ Students Already Onboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">🏆 100% Selection Rate</span>
              </div>
            </div>
          </div>

          {/* Right Image + Floating Labels */}
          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl">
              <img
                src="https://static.vecteezy.com/system/resources/previews/007/893/660/non_2x/set-of-icons-related-to-artificial-intelligence-contains-such-icons-as-analysis-artificial-intelligence-blockchain-brain-chatbot-coding-and-more-vector.jpg"
                alt="AI and Gemini projects"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">AI</div>
              <div className="text-sm opacity-90">Leader</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-xl shadow-lg">
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
