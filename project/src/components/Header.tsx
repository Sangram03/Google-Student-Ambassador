import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/#hero", isRoute: false },
    { name: "AI Projects", href: "/#about", isRoute: false },
    { name: "Benefits", href: "/#benefits", isRoute: false },
    { name: "About My Team", href: "/#team", isRoute: false },
    { name: "Unlock & QR Code", href: "/#referral", isRoute: false },
    { name: "FAQ", href: "/#footer", isRoute: false },
    { name: "Blog", href: "/blog", isRoute: true }, // ✅ Blog uses <Link>
  ];

  return (
    <header className="fixed top-4 left-4 right-4 rounded-3xl border border-black backdrop-blur-xl shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) =>
              link.isRoute ? (
                <Link
                  key={index}
                  to={link.href}
                  className="relative text-gray-700 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="relative text-gray-700 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-purple-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-purple-600" />
              ) : (
                <Menu className="w-6 h-6 text-blue-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeSlideDown">
            <div className="mt-2 px-4 py-4 space-y-3 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl">
              {links.map((link, index) =>
                link.isRoute ? (
                  <Link
                    key={index}
                    to={link.href}
                    className="block px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-purple-600 transition-all"
                    onClick={() => setIsMenuOpen(false)} // close menu on click
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="block px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-purple-600 transition-all"
                    onClick={() => setIsMenuOpen(false)} // close menu on click
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeSlideDown {
          animation: fadeSlideDown 0.35s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
