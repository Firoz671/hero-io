import { FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1727] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 border-b border-gray-700 pb-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-white.png" alt="Hero.io Logo" className="h-8 w-auto" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <span className="font-bold text-lg hidden font-sans tracking-wide">HERO.IO</span>
          </Link>
          
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
             <span className="font-medium text-sm text-gray-300">Social Links</span>
             <div className="flex gap-4 text-gray-400">
               <a href="#" className="hover:text-white transition-colors"><FiTwitter size={20} /></a>
               <a href="#" className="hover:text-white transition-colors"><FiLinkedin size={20} /></a>
               <a href="#" className="hover:text-white transition-colors"><FiFacebook size={20} /></a>
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
