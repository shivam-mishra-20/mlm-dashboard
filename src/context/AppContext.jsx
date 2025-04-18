import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Theme management
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      
      // Check system preference
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light'; // Default to light mode
  };
  
  const [theme, setTheme] = useState(getInitialTheme());
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
    balance: 10000,
    teamSize: 200,
    activeDownline: 50,
    monthlyROI: 1200,
    withdrawable: 8000,
    referralLink: "https://yourapp.com/register?ref=johndoe123"
  });

  const [teamData, setTeamData] = useState([
    { id: 1, name: 'Alice Johnson', level: 1, earnings: '₹2,500', joinDate: '2023-01-15', status: 'active' },
    { id: 2, name: 'Bob Smith', level: 1, earnings: '₹1,800', joinDate: '2023-02-10', status: 'active' },
    { id: 3, name: 'Carol White', level: 2, earnings: '₹1,200', joinDate: '2023-02-25', status: 'active' },
    { id: 4, name: 'Dave Miller', level: 2, earnings: '₹900', joinDate: '2023-03-05', status: 'inactive' },
    { id: 5, name: 'Eve Wilson', level: 3, earnings: '₹500', joinDate: '2023-03-20', status: 'active' }
  ]);

  const [earningsData, setEarningsData] = useState([
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 1800 },
    { month: 'Mar', amount: 1400 },
    { month: 'Apr', amount: 2200 },
    { month: 'May', amount: 2600 },
    { month: 'Jun', amount: 3100 }
  ]);
  
  // Apply theme changes to HTML document
  useEffect(() => {
    localStorage.setItem('color-theme', theme);
    
    // Apply theme to document
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  // Update authentication in localStorage
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Login function
  const login = (email, password) => {
    // In a real app, you would validate credentials against an API
    if (email === "demo@example.com" && password === "password") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  
  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{ 
      userData, setUserData, 
      teamData, setTeamData,
      earningsData, setEarningsData,
      theme, toggleTheme,
      isAuthenticated, login, logout
    }}>
      {children}
    </AppContext.Provider>
  );
};