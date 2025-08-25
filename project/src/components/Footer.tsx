import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Plus,
  Minus,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const faqs = [
    {
      question: "What is the Google Student Ambassador Program?",
      answer:
        "The Google Student Ambassador Program is an initiative by Google that empowers students to represent Google on their campus, organize events, share knowledge, and build a strong developer community.",
    },
    {
      question: "Who can apply for the Ambassador Program?",
      answer:
        "The program is open to undergraduate and postgraduate students who are passionate about technology, AI, and community building. You should be an active learner and willing to help your peers.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "Through our referral program, you can get direct guidance and mentorship in AI projects, Gemini integration, and application tips that increase your chances of being selected as a Google Student Ambassador.",
    },
    {
      question: "What are the benefits of becoming a Google Student Ambassador?",
      answer:
        "Benefits include exclusive access to Google events, training resources, networking with industry experts, certification opportunities, and the chance to lead a recognized tech community on your campus.",
    },
    {
      question: "Do I need prior experience with Google Cloud or AI?",
      answer:
        "No prior experience is required. However, having basic knowledge of AI, Google Cloud, or participation in developer communities will give you an added advantage.",
    },
    {
      question: "How can I stay updated about upcoming opportunities?",
      answer:
        "You can subscribe to our newsletter in the footer section to receive the latest updates about AI projects, referral openings, and ambassador program announcements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Show/hide back-to-top button
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="footer"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900"
    >
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#grad)"
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,85.3C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* FAQ Section */}
      <div className="pt-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md text-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base md:text-lg font-semibold">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-500" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Google Ambassador
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 max-w-md">
              Helping students join Google Student Ambassador Program through AI
              expertise, Gemini mentorship & referral guidance.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 bg-white/70 rounded-full shadow hover:shadow-lg transition hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-gray-600 hover:text-blue-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <a href="#about" className="hover:text-blue-600 transition">
                  AI Projects
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-blue-600 transition">
                  Referral Benefits
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-blue-600 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#referral" className="hover:text-blue-600 transition">
                  Unlock QR Scanner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:sangramraju143@gmail.com"
                  className="hover:text-blue-600"
                >
                  sangramraju143@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span>Available via application form</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <span>
                  Srinix Campus
                  <br />
                  AI Lab & Innovation Center
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-14 pt-8 border-t border-gray-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-700">
                Subscribe for AI projects & referral opportunities 🚀
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-white/70 backdrop-blur rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div>© 2025 AI Ambassador Referral Program. All rights reserved.</div>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transition z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </section>
  );
};

export default Footer;
