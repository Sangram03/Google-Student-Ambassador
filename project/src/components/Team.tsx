import React from 'react';
import { Linkedin, Twitter, Github, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "AI Research Intern",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Rohan Patel",
      role: "Full-Stack Developer",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Aditi Verma",
      role: "Data Scientist",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Arjun Mehta",
      role: "Community Manager",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Team Members */}
        <div className="text-center mb-12">
          <Users className="w-10 h-10 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Meet My Team
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I collaborate with an amazing group of students who specialize in AI, development, 
            and community building. Together, we make impactful projects possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={member.github} className="text-gray-400 hover:text-gray-700">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's collaborate on cutting-edge AI projects and accelerate your journey into the Google Student Ambassador Program. 
            My mentorship and referral system has a 100% success rate.
          </p>
          <button
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 font-medium"
          >
            Start Your Referral Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
