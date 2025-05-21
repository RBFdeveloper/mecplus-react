import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
}

const Card: React.FC<CardProps> = ({ title, description, imgUrl, imgAlt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;