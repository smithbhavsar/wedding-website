// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// interface GalleryPageProps {
//   memories: Array<{
//     title: string;
//     galleryImages: string[];
//   }>;
// }

// const GalleryPage: React.FC<GalleryPageProps> = ({ memories }) => {
//   const { event } = useParams();
//   const navigate = useNavigate();
//   const memory = memories.find(m => m.title.toLowerCase() === event);

//   console.log('memory', memory?.galleryImages);

//   if (!memory) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">Gallery not found</h2>
//           <button
//             onClick={() => navigate('/')}
//             className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <button
//             onClick={() => navigate('/')}
//             className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Home
//           </button>
//         </div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">{memory.title} Gallery</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {memory.galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className="aspect-w-3 aspect-h-2 group relative overflow-hidden rounded-lg shadow-lg"
//             >
//               <img
//                 src={image}
//                 alt={`${memory.title} Gallery ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GalleryPage;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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

  const openLightbox = (index: number) => {
    setSelectedImage(memory.galleryImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showPrevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setSelectedImage(memory.galleryImages[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  const showNextImage = () => {
    if (currentIndex !== null && currentIndex < memory.galleryImages.length - 1) {
      const nextIndex = currentIndex + 1;
      setSelectedImage(memory.galleryImages[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

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
              className="aspect-w-3 aspect-h-2 group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(index)}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 text-white bg-gray-800 p-2 rounded-full"
            onClick={showPrevImage}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={32} />
          </button>

          <img src={selectedImage} className="max-h-[80vh] max-w-[90vw] object-contain" alt="Selected" />

          <button
            className="absolute right-4 text-white bg-gray-800 p-2 rounded-full"
            onClick={showNextImage}
            disabled={currentIndex === memory.galleryImages.length - 1}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
