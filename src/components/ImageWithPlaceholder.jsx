import React from 'react';

const ImageWithPlaceholder = ({ src, alt }) => {
  return (
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
      <img
        src={src || 'https://via.placeholder.com/400x200'}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageWithPlaceholder;
