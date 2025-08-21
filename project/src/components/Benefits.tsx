import React from 'react';
import { Award, BookOpen, Network, Briefcase, Zap, Users, Gift, Trophy, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    // 🔥 Referral-only benefits
    {
      icon: Award,
      title: "Guaranteed Referral Bonus",
      description: "Get priority consideration and insider tips that increase your acceptance chances by 300%.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BookOpen,
      title: "AI & Gemini Masterclass",
      description: "Exclusive access to my AI project tutorials, Gemini API guides, and hands-on coding sessions.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Network,
      title: "Direct Mentor Access",
      description: "Get 1-on-1 mentorship sessions with me throughout your ambassador journey and beyond.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Project Collaboration",
      description: "Work directly on my AI projects and build a portfolio that stands out to top tech companies.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description: "Skip the learning curve with my proven frameworks and accelerated AI development techniques.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Join my private group of referred students for networking, collaboration, and ongoing support.",
      color: "from-teal-500 to-teal-600"
    },

    // 🎁 Official Google program benefits
    {
      icon: Gift,
      title: "Welcome Kit",
      description: "Receive 1,000 Google stickers and official goodies shipped directly to you within 20 days.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Digital Badges & Rewards",
      description: "Unlock milestone rewards like enamel mugs, diaries, sippers, vouchers, YouTube Premium & more.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Trophy,
      title: "Exclusive Levels",
      description: "Progress through Bronze, Silver, Gold, Sapphire, Platinum, Diamond, Titan, and Celestial tiers.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Trophy,
      title: "Google Certification",
      description: "Earn a Google-branded certificate on successful completion of the program milestones.",
      color: "from-green-700 to-green-800"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All the Benefits You’ll Unlock 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you join through my referral, you get <b>exclusive perks</b> plus all the <b>official program benefits</b>. 
            From welcome kits and digital badges to certifications and career-boosting mentorship — you get it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Unlock All These Benefits?</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Join 50+ students who have successfully entered the program through my referral system and are already enjoying these rewards.
            </p>
            <button 
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              Apply with My Referral
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
