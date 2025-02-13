import React from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MemorySectionProps {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const MemorySection: React.FC<MemorySectionProps> = ({
  title,
  description,
  images,
  reverse = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
        <button
          onClick={() => navigate(`/gallery/${title.toLowerCase()}`)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200"
        >
          <Camera className="w-5 h-5 mr-2" />
          View Gallery
        </button>
      </div>
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemorySection;