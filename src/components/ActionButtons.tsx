
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionButtons: React.FC = () => {
  return (
    <div className="mt-12 space-y-4">
      <Link to="/projects" className="block w-full py-3 border rounded-md text-center hover:bg-secondary transition-colors dark:border-gray-700 dark:hover:bg-gray-800">
        see my projects <ExternalLink size={16} className="inline-block ml-1" />
      </Link>
      
      <div className="text-center text-muted-foreground">
        or, → <Link to="/resume" className="underline hover:text-foreground transition-colors">view my resume</Link>
      </div>
    </div>
  );
};

export default ActionButtons;
