
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div>
        <Link to="/" className="text-xl font-medium text-portfolio-brown border-b-2 border-portfolio-brown pb-1">
          denis mutwiri
        </Link>
      </div>
      
      <nav className="flex items-center space-x-6">
        <Link to="/about" className="link-item">about</Link>
        <Link to="/projects" className="link-item">projects</Link>
        <Link to="/writing" className="link-item">writing</Link>
        <button aria-label="Toggle theme" className="ml-2">
          <Sun size={18} />
        </button>
        <div className="ml-2 border rounded px-3 py-1 text-xs font-mono">
          ctrl + k
        </div>
      </nav>
    </header>
  );
};

export default Header;
