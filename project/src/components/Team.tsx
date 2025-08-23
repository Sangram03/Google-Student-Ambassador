import { Linkedin, Twitter, Github, Users } from 'lucide-react';
import * as Images from '../assets/asset';

const Team = () => {
  const teamMembers = [
    
    {
      name: "Rajib Panda",
      role: "Frontend Lead",
      img: Images.RajibPanda,
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Krushna Chandra Bindhani",
      role: "Social Media Manager",
      img: Images.KrushnaChandraBindhani,
      linkedin: "https://www.linkedin.com/in/krushna-chandra-bindhani-1b1342275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#"
    },
    {
      name: "Bhababhanjan Panda",
      role: "Frontend Lead",
      img: Images.BhabaImage,
      linkedin: "https://www.linkedin.com/in/bhababhanjan-panda-65b340275/",
      twitter: "#",
      github: "#"
    },
    {
      name: "Kajal Panigrahi",
      role: "Content Writing",
      img: Images.KajalImage,
      linkedin:"https://www.linkedin.com/in/kajal-panigrahi-99a23b275/",
      twitter: "#",
      github: "#"
    },
    {
      name: "Chinmayee Charuprava Panda",
      role: "Content Writing",
      img: Images.CharuPanda,
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Sadashiba Behera",
      role: "Social Media Manager",
      img:Images.SadashibaBeheraImage,
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Bhakti Ranjan Das",
      role: "Social Media Manager",
      img: Images.BhakiDas,
      linkedin: "https://www.linkedin.com/in/bhakti-ranjan-das-a87094275",
      twitter: "#",
      github: "#"
    },
    {
      name: "Prakash Jena",
      role: "Backend Lead",
      img: Images.Prakashjena,
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Sangram Das",
      role: "Overall Lead",
      img: Images.SangramDas,
      linkedin: "https://www.linkedin.com/in/sangram-das-710397275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "#",
      github: "#"
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <Users className="w-12 h-12 mx-auto text-purple-600 mb-4 animate-bounce" />
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet My Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I collaborate with an amazing group of students who specialize in AI, development, 
            and community building. Together, we make impactful projects possible.
          </p>
        </div>

        {/* Team Members (Responsive Grid) */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 w-64"
            >
              <div className="relative mx-auto mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-purple-200 hover:ring-purple-400 transition duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-5">
                <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-sky-400 transform hover:scale-110 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.github} className="text-gray-400 hover:text-gray-800 transform hover:scale-110 transition">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Team;
