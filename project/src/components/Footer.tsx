import { SetStateAction, useState } from "react";
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

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: number | SetStateAction<null>) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="footer"
      className="bg-gray-100 text-gray-900 pt-10 transition-colors"
    >
      {/* FAQ Section */}
      <div className="pt-12  ">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white  text-gray-800 rounded-xl p-4 shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-base md:text-lg font-medium">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-500" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-900 ">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Google Logo inside circle */}
              <div className="w-9 h-9 rounded-full shadow-md flex items-center justify-center bg-white">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                Google Ambassador
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-md">
              Helping students join Google Student Ambassador Program through AI
              expertise, Gemini project mentorship, and guaranteed referral
              success.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-500  hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/gdsc__srinix/"
                aria-label="Instagram"
                className="text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  AI Projects
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Referral Benefits
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#referral"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Unlock QR Scanner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:sangramraju143@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  sangramraju143@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  Available via application form
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  Srinix Campus
                  <br />
                  AI Lab & Innovation Center
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get updates on AI projects and referral opportunities.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email for AI updates"
                required
                aria-label="Email for AI updates"
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                           px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 
                           transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AI Ambassador Referral Program. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
