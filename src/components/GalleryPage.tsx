import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface GalleryPageProps {
  memories: Array<{
    title: string;
    galleryImages: string[];
  }>;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ memories }) => {
  const { event } = useParams();
  const navigate = useNavigate();
  const memory = memories.find(m => m.title.toLowerCase() === event);

  if (!memory) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Gallery not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{memory.title} Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memory.galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-w-3 aspect-h-2 group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`${memory.title} Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;