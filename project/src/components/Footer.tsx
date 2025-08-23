import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-xl font-bold">Google Ambassador Referral</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Helping students join Google Student Ambassador Program through AI expertise, 
              Gemini project mentorship, and guaranteed referral success.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook"
                 className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter"
                 className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn"
                 className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/gdsc__srinix/" aria-label="Instagram"
                 className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">AI Projects</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Referral Benefits</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
              <li><a href="#referral" className="text-gray-400 hover:text-white transition-colors">Unlock QR Scanner</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:sangramraju143@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  sangramraju143@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">Available via application form</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
                <span className="text-gray-400">Srinix Campus<br />AI Lab & Innovation Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get updates on AI projects and referral opportunities.</p>
            </div>
            <form className="flex space-x-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email for AI updates"
                required
                aria-label="Email for AI updates"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           text-white placeholder-gray-400"
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
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 AI Ambassador Referral Program. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
