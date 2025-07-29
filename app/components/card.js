import React from 'react';

const Card = ({ media, title, description, link }) => {
  const isVideo = media?.endsWith('.mp4');

  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      {isVideo ?
      (
        <video src={media}
        controls
        className="w-full h-48 object-cover"/>
      ) : (

        <img src={media} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
