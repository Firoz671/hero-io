import { Link, NavLink } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Hero.io Logo" className="h-8 w-auto mix-blend-multiply" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
          <span className="font-bold text-lg text-[#2B35AF]  font-sans tracking-wide">HERO.IO</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors pb-1 ${isActive ? 'text-[#8758FF] border-b-2 border-[#8758FF]' : 'text-gray-600 hover:text-[#8758FF]'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              `transition-colors pb-1 ${isActive ? 'text-[#8758FF] border-b-2 border-[#8758FF]' : 'text-gray-600 hover:text-[#8758FF]'}`
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              `transition-colors pb-1 ${isActive ? 'text-[#8758FF] border-b-2 border-[#8758FF]' : 'text-gray-600 hover:text-[#8758FF]'}`
            }
          >
            Installation
          </NavLink>
        </nav>

        {/* Action Button */}
        <div>
          <a flex="true" href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#8758FF] hover:bg-[#7340ff] text-white px-5 py-2.5 rounded-md flex items-center gap-2 text-sm font-medium transition-colors">
            <FiGithub size={18} />
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
