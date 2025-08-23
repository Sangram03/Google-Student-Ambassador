import { Target, Brain, Code, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI & Gemini Expertise",
      description:
        "Get direct access to my AI projects and Gemini implementations. Learn from real-world applications and cutting-edge use cases.",
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description:
        "Work on actual AI projects using Gemini API, machine learning models, and innovative solutions that solve real problems.",
    },
    {
      icon: Target,
      title: "Direct Mentorship",
      description:
        "Get personalized guidance from me as your referring ambassador. I'll help you navigate the program and maximize opportunities.",
    },
    {
      icon: Sparkles,
      title: "Fast-Track Application",
      description:
        "My referral gives you priority consideration and insider tips to make your application stand out from thousands of others.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Join Through My Referral?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a current Google Student Ambassador specializing in AI and Gemini projects, 
            I offer you exclusive benefits, direct mentorship, and insider knowledge 
            to accelerate your journey.
          </p>
        </div>

        {/* Features with connecting line */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Connecting Line */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            {/* Vertical line for mobile/tablet */}
            <div className="lg:hidden h-full w-0.5 bg-gradient-to-b from-blue-300 to-purple-300"></div>
          </div>

          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="relative text-center group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Projects Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                My AI Projects & Gemini Use Cases
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Background Remover using Gemini API –{" "}
                    <a
                      href="https://back-removal-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View
                    </a>
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    AI-powered Code Review Tool with Gemini integration for students
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Campus Event Chatbot using Gemini for automated student support
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Research Paper Analyzer with Gemini for academic insights
                  </p>
                </div>

                {/* Your Project */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Chrome Summarizer Extension using Gemini API –{" "}
                    <a
                      href="https://github.com/Sangram03/Summaries_Chrome_Bot.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View on GitHub
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.law.com/contrib/content/uploads/sites/397/2021/06/Artificial-Intelligence-08-767x633.jpg"
                alt="AI and machine learning projects"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
