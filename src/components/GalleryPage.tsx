// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, X, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

// interface GalleryPageProps {
//   memories: Array<{
//     title: string;
//     galleryImages: string[];
//     backgroundImage: string;
//   }>;
// }

// // Function to shuffle images once
// const shuffleArray = (array: string[]) => {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const GalleryPage: React.FC<GalleryPageProps> = ({ memories }) => {
//   const { event } = useParams();
//   const navigate = useNavigate();
//   const memory = memories.find(m => m.title.toLowerCase() === event);

//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState<number | null>(null);
//   const [showScrollButton, setShowScrollButton] = useState(false);

//   // ✅ Store shuffled images in a ref so they persist
//   const shuffledImagesRef = useRef<string[]>([]);

//   useEffect(() => {
//     if (memory && shuffledImagesRef.current.length === 0) {
//       shuffledImagesRef.current = shuffleArray(memory.galleryImages);
//     }
//   }, [memory]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollButton(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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

//   const shuffledImages = shuffledImagesRef.current;

//   const openLightbox = (index: number) => {
//     setSelectedImage(shuffledImages[index]);
//     setCurrentIndex(index);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     setCurrentIndex(null);
//   };

//   const showPrevImage = () => {
//     if (currentIndex !== null && currentIndex > 0) {
//       setSelectedImage(shuffledImages[currentIndex - 1]);
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const showNextImage = () => {
//     if (currentIndex !== null && currentIndex < shuffledImages.length - 1) {
//       setSelectedImage(shuffledImages[currentIndex + 1]);
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${memory.backgroundImage})` }}>
//       <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <button
//             onClick={() => navigate("/", { state: { section: event } })}
//             className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
//           >
//             <ArrowLeft className="w-5 h-5 mr-2" />
//             Back to Home
//           </button>
//         </div>
//         <h1 className="text-4xl font-bold text-gray-900 mb-8">{memory.title} Gallery</h1>

//         {/* Display shuffled images */}
//         <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6">
//           {shuffledImages.map((image, index) => (
//             <div
//               key={index}
//               className="aspect-w-3 aspect-h-2 group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
//               onClick={() => openLightbox(index)}
//             >
//               <img
//                 src={image}
//                 alt={`${memory.title} Gallery ${index + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
//           <button
//             className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
//             onClick={closeLightbox}
//           >
//             <X size={24} />
//           </button>

//           <button
//             className="absolute left-4 text-white bg-gray-800 p-2 rounded-full"
//             onClick={showPrevImage}
//             disabled={currentIndex === 0}
//           >
//             <ChevronLeft size={32} />
//           </button>

//           <img src={selectedImage} className="max-h-[80vh] max-w-[90vw] object-contain" alt="Selected" />

//           <button
//             className="absolute right-4 text-white bg-gray-800 p-2 rounded-full"
//             onClick={showNextImage}
//             disabled={currentIndex === shuffledImages.length - 1}
//           >
//             <ChevronRight size={32} />
//           </button>
//         </div>
//       )}

//       {/* Scroll to Top Button */}
//       {showScrollButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all"
//         >
//           <ArrowUp size={24} />
//         </button>
//       )}
//     </div>
//   );
// };

// export default GalleryPage;


import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

interface GalleryPageProps {
  memories: Array<{
    title: string;
    galleryImages: string[];
    backgroundImage: string;
  }>;
}

// Function to shuffle images once
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const GalleryPage: React.FC<GalleryPageProps> = ({ memories }) => {
  const { event } = useParams();
  const navigate = useNavigate();
  const memory = memories.find(m => m.title.toLowerCase() === event);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  // ✅ Store shuffled images in a ref so they persist
  const shuffledImagesRef = useRef<string[]>([]);

  useEffect(() => {
    if (memory && shuffledImagesRef.current.length === 0) {
      shuffledImagesRef.current = shuffleArray(memory.galleryImages);
    }
  }, [memory]);

  // ✅ Preload Background Image for faster loading
  useEffect(() => {
    if (memory?.backgroundImage) {
      const img = new Image();
      img.src = memory.backgroundImage;
      img.onload = () => setBgLoaded(true);
    }
  }, [memory?.backgroundImage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const shuffledImages = shuffledImagesRef.current;

  const openLightbox = (index: number) => {
    setSelectedImage(shuffledImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const showPrevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setSelectedImage(shuffledImages[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentIndex !== null && currentIndex < shuffledImages.length - 1) {
      setSelectedImage(shuffledImages[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center transition-opacity duration-500"
      style={{
        backgroundImage: bgLoaded ? `url(${memory.backgroundImage})` : `url('/assets/blur-placeholder.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        opacity: bgLoaded ? 1 : 0.5
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate("/", { state: { section: event } })}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{memory.title} Gallery</h1>

        {/* Display shuffled images */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {shuffledImages.map((image, index) => (
            <div
              key={index}
              className="aspect-w-3 aspect-h-2 group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`${memory.title} Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
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
            disabled={currentIndex === shuffledImages.length - 1}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default GalleryPage;
