
import React from 'react';

const ProfilePhoto: React.FC = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-12 mb-16">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-md">
        <img
          src="/src/images/mutwiri.png"  // Temporary placeholder - replace with actual image upload mechanism
          alt="Denis Mutwiri"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
