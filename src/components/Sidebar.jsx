import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, DollarSign, LogOut, Settings, CreditCard, Share2, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const navLinks = [
  { name: "Dashboard", icon: <Home className="h-5 w-5" />, path: "/" },
  { name: "Team", icon: <Users className="h-5 w-5" />, path: "/team" },
  { name: "Earnings", icon: <DollarSign className="h-5 w-5" />, path: "/earnings" },
  { name: "Withdraw", icon: <CreditCard className="h-5 w-5" />, path: "/withdraw" },
  { name: "Referrals", icon: <Share2 className="h-5 w-5" />, path: "/referrals" },
  { name: "Settings", icon: <Settings className="h-5 w-5" />, path: "/settings" },
];

export default function Sidebar({ mobile, closeSidebar }) {
  const location = useLocation();
  const { userData } = useAppContext();
  
  return (
    <aside className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Sidebar header */}
      <div className="p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-orange-500 flex items-center">
          <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          MLM Pro
        </div>
        {mobile && (
          <button onClick={closeSidebar} className="p-2 rounded-md text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        )}
      </div>
      
      {/* User profile summary */}
      <div className="border-b border-gray-200 mx-4 py-4">
        <div className="flex items-center space-x-3 px-2">
          <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
            {userData.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {userData.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {userData.email}
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className={`flex items-center px-3 py-3 rounded-md transition-colors duration-200 ${
              location.pathname === link.path 
                ? "bg-orange-50 text-orange-600" 
                : "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
            }`}
            onClick={mobile ? closeSidebar : undefined}
          >
            <span className="mr-3">{link.icon}</span>
            <span>{link.name}</span>
            
            {/* Active indicator */}
            {location.pathname === link.path && (
              <span className="ml-auto h-2 w-2 rounded-full bg-orange-500"></span>
            )}
          </Link>
        ))}
      </nav>
      
      {/* Sidebar footer */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200">
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
