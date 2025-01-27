import React from 'react';

function Card({ imageSrc, name, onClick }) {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow max-w-100 m-4 cursor-pointer">
      <img
        src={imageSrc}
        alt={name}
        onClick={onClick}
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <h1 className="text-lg font-bold text-white">{name}</h1>
    </div>
  );
}

export default Card;
