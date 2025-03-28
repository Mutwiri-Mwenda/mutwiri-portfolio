
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfilePhoto from '../components/ProfilePhoto';
import RecentlySection from '../components/RecentlySection';
import ActionButtons from '../components/ActionButtons';

const Index = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-6">
          {/* Introduction and education */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-block h-2 w-2 bg-gray-800 rounded-sm"></span>
              <span>Currently looking for <span className="bg-green-100 text-green-800 px-1">Software Engineering</span> (role)</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="inline-block h-2 w-2 bg-gray-800 rounded-sm"></span>
              <span>CS graduate from <span className="text-portfolio-brown font-medium">Machakos University</span></span>
            </div>
          </div>
          
          {/* Recently section */}
          <RecentlySection />
          
          {/* Additional experience */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-block h-2 w-2 bg-gray-800 rounded-sm"></span>
              <span>in university: research in <span className="text-green-700">Data Science</span> at <span className="text-portfolio-brown font-medium">Tech Lab</span>, volunteered at <span className="text-portfolio-brown font-medium">MachHacks</span>, built the</span>
            </div>
            
            <div className="ml-4 pl-2">
              <span className="text-portfolio-brown">📱</span> <span className="font-medium">campus app</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <ActionButtons />
        
        {/* Profile photo */}
        <ProfilePhoto />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
