import React from 'react';

function Card({ imageSrc, name, onClick }) {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-4 cursor-pointer">
      <img
        src={imageSrc}
        alt={name}
        onClick={onClick}
        className="w-full h-47 object-center rounded-md mb-2"
      />
      <h1 className="text-lg font-bold text-white">{name}</h1>
    </div>
  );
}

export default Card;