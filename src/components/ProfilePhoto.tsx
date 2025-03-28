
import React from 'react';

const ProfilePhoto: React.FC = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-12 mb-16">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
        {/* Placeholder until user uploads photo */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          <p className="text-sm">Photo will be uploaded later</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
