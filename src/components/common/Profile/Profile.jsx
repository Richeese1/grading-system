import React from "react";

const Profile = ({ imageUrl, gmail, name }) => {
  return (
    <div className="flex flex-col items-center p-4 border-b border-black-600">
      <div className="h-48 w-48 bg-red rounded-full overflow-hidden flex justify-center items-center mb-2">
        <img src={imageUrl} alt="Profile" className="h-48 w-48 object-cover" />
      </div>
      <div className="text-center">
        <p className="font-bold">{name}</p>
        <p className="font-semibold">{gmail}</p>
      </div>
    </div>
  );
};

export default Profile;
