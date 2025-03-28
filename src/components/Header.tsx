
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user previously set a preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex items-center justify-between py-4 border-b mb-4">
      <div>
        <Link to="/" className="text-xl font-medium text-portfolio-brown dark:text-white border-b-2 border-portfolio-brown dark:border-white pb-1">
          denis mutwiri
        </Link>
      </div>
      
      <nav className="flex items-center space-x-6">
        <Link to="/about" className="link-item dark:text-white">about</Link>
        <Link to="/projects" className="font-medium text-portfolio-brown dark:text-white">projects</Link>
        <Link to="/writing" className="link-item dark:text-white">writing</Link>
        <button 
          aria-label="Toggle theme" 
          className="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Moon size={18} className="text-white" /> : <Sun size={18} />}
        </button>
        <div className="ml-2 border rounded px-3 py-1 text-xs font-mono dark:text-white dark:border-gray-700">
          ctrl + k
        </div>
      </nav>
    </header>
  );
};

export default Header;
