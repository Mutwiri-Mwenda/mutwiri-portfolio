
import React from 'react';

const RecentlySection: React.FC = () => {
  return (
    <div className="mt-4">
      <h3 className="text-base italic text-portfolio-brown">recently:</h3>
      <ul className="mt-2 space-y-2">
        <li className="flex">
          <span className="list-arrow mr-2">↳</span>
          <span>developed a <span className="font-medium">web application</span> for local community to track resources</span>
        </li>
        <li className="flex">
          <span className="list-arrow mr-2">↳</span>
          <span>implemented a <span className="font-medium">payment gateway</span> (500+ transactions in first week)</span>
        </li>
        <li className="flex">
          <span className="list-arrow mr-2">↳</span>
          <span>built a <span className="font-medium">machine learning model</span> from scratch using Python</span>
        </li>
        <li className="flex">
          <span className="list-arrow mr-2">↳</span>
          <span>created a <span className="font-medium">data visualization dashboard</span> for campus research project</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentlySection;
