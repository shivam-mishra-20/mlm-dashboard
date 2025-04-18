import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, User, Moon, Sun, Settings } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar = ({ toggleSidebar }) => {
  const { userData, theme, toggleTheme } = useAppContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Add useEffect to apply theme to the document
  
  React.useEffect(() => {
    // Apply theme to document element
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  return (
    <header className={`fixed w-full top-0 z-30 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white shadow-sm border-gray-200'} border-b`}>
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left side - Mobile menu button and welcome message */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleSidebar}
            className={`lg:hidden md:hidden p-2 rounded-md ${theme === 'dark' ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-700' : 'text-gray-600 hover:text-orange-500 hover:bg-gray-100'} focus:outline-none`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className={`font-semibold text-base sm:text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} truncate`}>
            <span className="hidden sm:inline">Welcome back,</span> {userData.name.split(' ')[0]} 👋
          </div>
        </div>
        
        {/* Right side - User profile, notifications, etc. */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-md ${theme === 'dark' ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'} transition-colors`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button 
            className={`p-2 rounded-md ${theme === 'dark' ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'} transition-colors relative`}
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="animate-ping absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-orange-500"></span>
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center p-2 rounded-md ${theme === 'dark' ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'} transition-colors`}
              aria-label="User menu"
            >
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
                {userData.name.charAt(0)}
              </div>
            </button>
            
            {dropdownOpen && (
              <div className={`absolute right-0 mt-2 w-48 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-md shadow-lg py-1 z-50 border`}>
                <Link 
                  to="/profile" 
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-orange-400' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'} flex items-center`}
                  onClick={() => setDropdownOpen(false)}
                >
                  <User className="h-4 w-4 mr-2" /> Profile
                </Link>
                <Link 
                  to="/settings" 
                  className={`px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-700 hover:text-orange-400' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'} flex items-center`}
                  onClick={() => setDropdownOpen(false)}
                >
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </Link>
                <hr className={`my-1 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`} />
                <button 
                  className={`block w-full text-left px-4 py-2 text-sm text-red-600 ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-orange-50'}`}
                  onClick={() => setDropdownOpen(false)}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
