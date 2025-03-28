
import React from 'react';
import { Twitter, Linkedin, Github, Mail, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t pt-4 pb-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-5xl font-handwriting text-portfolio-brown">Denis Mutwiri</h2>
          <div className="animate-pulse text-muted-foreground text-right text-sm">
            ●
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="mailto:example@example.com" aria-label="Email">
              <Mail size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a href="https://github.com/your-username/portfolio" target="_blank" rel="noopener noreferrer" aria-label="Source Code">
              <Code size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link to="/prev" className="text-muted-foreground hover:text-foreground transition-colors">←</Link>
            <span className="text-muted-foreground">🏠</span>
            <Link to="/next" className="text-muted-foreground hover:text-foreground transition-colors">→</Link>
          </div>
          
          <div className="text-sm text-muted-foreground mt-1">
            2024 © Denis Mutwiri
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
