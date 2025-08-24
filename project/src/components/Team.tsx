import { Linkedin, Twitter, Github, Users } from 'lucide-react';
import * as Images from '../assets/asset';
import { useState, useEffect } from 'react';

const Team = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  // ✅ Close modal with Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setZoomedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const mentor = {
    name: "Krishna Bera",
    role: "Mentor",
    img: Images.KrishImage,
    linkedin: "#",
    twitter: "#",
    github: "#"
  };

  const teamMembers = [
    { name: "Rajib Panda", role: "Frontend Lead", img: Images.RajibPanda, linkedin: "#", twitter: "#", github: "#" },
    { name: "Krushna Chandra Bindhani", role: "Frontend Lead", img: Images.KrushnaChandraBindhani, linkedin: "https://www.linkedin.com/in/krushna-chandra-bindhani-1b1342275", twitter: "#", github: "#" },
    { name: "Bhababhanjan Panda", role: "Frontend Lead", img: Images.BhabaImage, linkedin: "https://www.linkedin.com/in/bhababhanjan-panda-65b340275/", twitter: "#", github: "#" },
    { name: "Kajal Panigrahi", role: "Content Writing", img: Images.KajalImage, linkedin:"https://www.linkedin.com/in/kajal-panigrahi-99a23b275/", twitter: "#", github: "#" },
    { name: "Chinmayee Charuprava Panda", role: "Content Writing", img: Images.CharuPanda, linkedin: "#", twitter: "#", github: "#" },
    { name: "Sadashiba Behera", role: "Social Media Manager", img: Images.SadashibaBeheraImage, linkedin: "#", twitter: "#", github: "#" },
    { name: "Bhakti Ranjan Das", role: "Social Media Manager", img: Images.BhakiDas, linkedin: "https://www.linkedin.com/in/bhakti-ranjan-das-a87094275", twitter: "#", github: "#" },
    { name: "Prakash Jena", role: "Backend Lead", img: Images.Prakashjena, linkedin: "#", twitter: "#", github: "#" },
    { name: "Sangram Das", role: "Overall Lead", img: Images.SangramDas, linkedin: "https://www.linkedin.com/in/sangram-das-710397275", twitter: "#", github: "#" },
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

        {/* Mentor */}
        <div className="text-center mb-12">
          <h4 className="text-2xl font-semibold text-purple-700 mb-6">Our Mentor</h4>
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-6 w-72 mx-auto transform hover:scale-105 duration-300">
            <img
              src={mentor.img}
              alt={mentor.name}
              onClick={() => setZoomedImage(mentor.img)}
              className="w-36 h-36 rounded-full mx-auto object-cover ring-4 ring-purple-200 hover:ring-purple-400 cursor-pointer transition-all duration-300"
            />
            <h4 className="text-lg font-semibold text-gray-900 mt-4">{mentor.name}</h4>
            <p className="text-gray-600 mb-4">{mentor.role}</p>
            <div className="flex justify-center space-x-5">
              {mentor.linkedin && (
                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {mentor.twitter && (
                <a href={mentor.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transform hover:scale-110 transition">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {mentor.github && (
                <a href={mentor.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transform hover:scale-110 transition">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Team Members */}
        <h4 className="text-2xl font-semibold text-purple-700 mb-6 text-center">Our Team</h4>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center transform hover:scale-105 transition duration-300 w-64"
            >
              <img
                src={member.img}
                alt={member.name}
                onClick={() => setZoomedImage(member.img)}
                className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-purple-200 hover:ring-purple-400 cursor-pointer transition-all duration-300"
              />
              <h4 className="text-lg font-semibold text-gray-900 mt-4">{member.name}</h4>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-5">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition">
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transform hover:scale-110 transition">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transform hover:scale-110 transition">
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Zoomed Modal */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-xl shadow-2xl transform scale-95 animate-zoomIn"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
