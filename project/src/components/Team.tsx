import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, Github, Users, Star, Sparkles, Award } from 'lucide-react';
import * as Images from '../assets/asset';

// Type definitions
interface TeamMember {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  twitter: string;
  github: string;
  specialty: string;
}

type Mentor = TeamMember

interface VisibilityState {
  [key: string]: boolean;
}

interface StatItem {
  number: string;
  label: string;
  icon: string;
}

const Team: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  // Close modal with Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setZoomedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            setIsVisible(prev => ({...prev, [target.id]: true}));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const mentor: Mentor = {
    name: "Krishna Bera",
    role: "Mentor & Strategic Advisor , Assistant Professor",
    img: Images.KrishImage,
    linkedin: "#",
    twitter: "#",
    github: "#",
    specialty: "AI & Innovation"
  };

  const teamMembers: TeamMember[] = [
     { 
      name: "Sangram Das", 
      role: "Overall Lead , 4th Year", 
      img: Images.SangramDas, 
      linkedin: "https://www.linkedin.com/in/sangram-das-710397275", 
      twitter: "https://x.com/sangramdas_1", 
      github: "https://github.com/Sangram03",
      specialty: "MERN-Stack DEV + AI"
    },
    { 
      name: "Rajib Panda", 
      role: "Frontend Lead , 4th Year", 
      img: Images.RajibPanda, 
      linkedin: "", 
      twitter: "#", 
      github: "#",
      specialty: "React Specialist + AI"
    },
    { 
      name: "Krushna Chandra Bindhani", 
      role: "Frontend Lead , 4th Year", 
      img: Images.KrushnaChandraBindhani, 
      linkedin: "https://www.linkedin.com/in/krushna-chandra-bindhani-1b1342275", 
      twitter: "#", 
      github: "#",
      specialty: "UI/UX Expert + AI"
    },
    { 
      name: "Bhababhanjan Panda", 
      role: "Frontend Lead , 4th Year", 
      img: Images.BhabaImage, 
      linkedin: "https://www.linkedin.com/in/bhababhanjan-panda-65b340275/", 
      twitter: "#", 
      github: "#",
      specialty: "Animation Master + AI"
    },
    { 
      name: "Kajal Panigrahi", 
      role: "Content Writing , 4th Year", 
      img: Images.KajalImage, 
      linkedin: "https://www.linkedin.com/in/kajal-panigrahi-99a23b275/", 
      twitter: "#", 
      github: "#",
      specialty: "Technical Writer + AI"
    },
    { 
      name: "Chinmayee Charuprava Panda", 
      role: "Content Writing , 4th Year", 
      img: Images.CharuPanda, 
      linkedin: "#", 
      twitter: "#", 
      github: "#",
      specialty: "Creative Content + AI"
    },
    { 
      name: "Sadashiba Behera", 
      role: "Social Media Manager , 4th Year", 
      img: Images.SadashibaBeheraImage, 
      linkedin: "#", 
      twitter: "#", 
      github: "#",
      specialty: "Brand Strategy"
    },
    { 
      name: "Bhakti Ranjan Das", 
      role: "Social Media Manager , 4th Year", 
      img: Images.BhakiDas, 
      linkedin: "https://www.linkedin.com/in/bhakti-ranjan-das-a87094275", 
      twitter: "#", 
      github: "#",
      specialty: "Community Growth"
    },
    { 
      name: "Prakash Jena", 
      role: "Backend Lead , 4th Year", 
      img: Images.Prakashjena, 
      linkedin: "#", 
      twitter: "#", 
      github: "#",
      specialty: "API Architect + AI"
    },
   
  ];

  const stats: StatItem[] = [
    { number: "10+", label: "Team Members", icon: "👥" },
    { number: "5+", label: "Projects Done", icon: "🚀" },
    { number: "2+", label: "Happy Clients", icon: "😊" },
    { number: "2+", label: "Years Experience", icon: "⭐" }
  ];

  const handleImageClick = (img: string): void => {
    setZoomedImage(img);
  };

  const closeModal = (): void => {
    setZoomedImage(null);
  };

  const renderSocialLink = (
    url: string, 
    Icon: React.ComponentType<{ className?: string }>, 
    bgGradient: string,
    hoverShadow: string
  ): JSX.Element | null => {
    if (!url || url === "#") return null;
    
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`group/social w-12 h-12 ${bgGradient} text-white rounded-xl flex items-center justify-center shadow-lg ${hoverShadow} transform hover:scale-110 hover:rotate-12 transition-all duration-300`}
      >
        <Icon className="w-5 h-5 group-hover/social:animate-pulse" />
      </a>
    );
  };

  const renderMemberSocialLink = (
    url: string, 
    Icon: React.ComponentType<{ className?: string }>, 
    bgGradient: string,
    hoverShadow: string
  ): JSX.Element | null => {
    if (!url || url === "#") return null;
    
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`group/social w-10 h-10 ${bgGradient} text-white rounded-full flex items-center justify-center shadow-lg ${hoverShadow} transform hover:scale-110 hover:rotate-12 transition-all duration-300`}
      >
        <Icon className="w-4 h-4 group-hover/social:animate-bounce" />
      </a>
    );
  };

  return (
    <section id="team" className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Section Heading */}
        <div 
          id="heading"
          data-animate
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible.heading ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative inline-flex items-center justify-center mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-xl opacity-30 animate-pulse scale-150"></div>
            <Users className="relative w-16 h-16 text-purple-600 animate-bounce" />
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-pink-500 animate-spin" style={{animationDuration: '3s'}} />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Meet Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
             Team
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a passionate collective of innovators, creators, and visionaries working together to build extraordinary digital experiences. Each member brings unique expertise and creativity to our collaborative journey.
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-200"></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-ping animation-delay-500"></div>
          </div>
        </div>

        {/* Enhanced Mentor Section */}
        <div className="mb-24">
          <div 
            id="mentor-heading"
            data-animate
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible['mentor-heading'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-purple-600" />
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Our Mentor
              </h3>
              <Award className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          
          <div 
            id="mentor-card"
            data-animate
            className={`flex justify-center transform transition-all duration-1000 ${
              isVisible['mentor-card'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="group relative bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 p-8 w-80 transform hover:scale-105 hover:-rotate-1">
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-12 shadow-lg">
                ⭐ Mentor
              </div>
              
              {/* Profile image with enhanced effects */}
              <div className="relative mb-6 flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300 scale-110 animate-pulse"></div>
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  onClick={() => handleImageClick(mentor.img)}
                  className="relative w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-2xl cursor-pointer transform group-hover:scale-110 group-hover:ring-purple-300 transition-all duration-500"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full ring-4 ring-white animate-pulse"></div>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{mentor.name}</h4>
                <p className="text-purple-600 font-semibold mb-3">{mentor.role}</p>
                <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm px-4 py-2 rounded-full font-medium mb-6">
                  {mentor.specialty}
                </span>
                
                {/* Enhanced social links */}
                <div className="flex justify-center space-x-6">
                  {renderSocialLink(
                    mentor.linkedin,
                    Linkedin,
                    "bg-gradient-to-r from-blue-500 to-blue-600",
                    "hover:shadow-blue-500/50"
                  )}
                  {renderSocialLink(
                    mentor.twitter,
                    Twitter,
                    "bg-gradient-to-r from-sky-400 to-sky-500",
                    "hover:shadow-sky-400/50"
                  )}
                  {renderSocialLink(
                    mentor.github,
                    Github,
                    "bg-gradient-to-r from-gray-700 to-gray-800",
                    "hover:shadow-gray-500/50"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Team Members Section */}
        <div 
          id="team-heading"
          data-animate
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['team-heading'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-indigo-600" />
            <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
              Our Amazing Team
            </h3>
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        {/* Responsive grid with enhanced cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {teamMembers.map((member: TeamMember, index: number) => (
            <div
              key={index}
              id={`member-${index}`}
              data-animate
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 p-6 w-72 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible[`member-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              {/* Floating star decoration */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                <Star className="w-6 h-6 text-yellow-400 group-hover:animate-spin" />
              </div>
              
              {/* Gradient overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Profile section */}
              <div className="relative text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-110 animate-pulse"></div>
                  <img
                    src={member.img}
                    alt={member.name}
                    onClick={() => handleImageClick(member.img)}
                    className="relative w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-xl cursor-pointer transform group-hover:scale-110 group-hover:ring-purple-300 transition-all duration-500"
                  />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full ring-2 ring-white"></div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                
                {member.specialty && (
                  <span className="inline-block bg-gradient-to-r from-gray-100 to-purple-50 text-gray-700 text-xs px-3 py-1 rounded-full font-medium mb-6">
                    {member.specialty}
                  </span>
                )}
                
                {/* Enhanced social links */}
                <div className="flex justify-center space-x-4">
                  {renderMemberSocialLink(
                    member.linkedin,
                    Linkedin,
                    "bg-gradient-to-r from-blue-500 to-blue-600",
                    "hover:shadow-blue-500/50"
                  )}
                  {renderMemberSocialLink(
                    member.twitter,
                    Twitter,
                    "bg-gradient-to-r from-sky-400 to-sky-500",
                    "hover:shadow-sky-400/50"
                  )}
                  {renderMemberSocialLink(
                    member.github,
                    Github,
                    "bg-gradient-to-r from-gray-700 to-gray-800",
                    "hover:shadow-gray-500/50"
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          id="stats"
          data-animate
          className={`mt-24 text-center transform transition-all duration-1000 ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12">
            Our Journey in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat: StatItem, index: number) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Zoomed Modal */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div className="relative max-w-2xl w-full animate-zoom-in">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-2xl blur-xl"></div>
              <img
                src={zoomedImage}
                alt="Zoomed team member"
                className="relative w-full h-auto rounded-2xl shadow-2xl max-h-[90vh] object-contain ring-4 ring-white/20"
              />
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;