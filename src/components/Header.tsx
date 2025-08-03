import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Heart, HelpCircle, Archive } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { path: '/', label: 'Početna', icon: Home },
    { path: '/services', label: 'Umrlice', icon: Archive },
    { path: '/obituary', label: 'Učitaj umrlicu', icon: FileText },
    { path: '/greeting', label: 'Učitaj poslednji pozdrav', icon: Heart },
    { path: '/funeral-assistance', label: 'Pomoć za sahranu', icon: HelpCircle }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-yellow-600/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigation('/')}
          >
            <div className="block sm:hidden">
              <Logo size="small" />
            </div>
            <div className="hidden sm:block">
              <Logo size="medium" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-lg transition-colors text-sm xl:text-base ${
                    location.pathname === item.path
                      ? 'bg-yellow-600 text-slate-900'
                      : 'text-slate-300 hover:text-yellow-300 hover:bg-slate-800'
                  }`}
                >
                  <IconComponent size={16} className="xl:w-[18px] xl:h-[18px]" />
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">{item.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <select
              value={location.pathname}
              onChange={(e) => handleNavigation(e.target.value)}
              className="bg-slate-800 text-slate-300 border border-yellow-600/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base min-w-[140px] sm:min-w-[160px] focus:outline-none focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600"
            >
              {menuItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;