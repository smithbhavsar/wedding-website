import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Hero from './components/Hero';
import VideoReel from './components/VideoReel';
import MemorySection from './components/MemorySection';
import GalleryPage from './components/GalleryPage';
import JAY07217 from './assets/mehendi/JAY07217.JPG';
import JAY06628 from './assets/mehendi/JAY06628.JPG';

export const images = [JAY07217, JAY06628] 

function App() {
  const memories = [
    {
      title: 'Mehendi',
      description: 'The beautiful beginning of our wedding celebrations, where art and love intertwined on your hands.',
      images: images,
      galleryImages: [
        '../src/assets/mehendi/JAY06479.jpg',
        '../src/assets/mehendi/JAY06489.jpg',
        '../src/assets/mehendi/JAY06504.jpg',
        '../src/assets/mehendi/JAY06532.jpg',
        '../src/assets/mehendi/JAY06535.jpg',
        '../src/assets/mehendi/JAY06584.jpg',
        '../src/assets/mehendi/JAY06605.jpg',
        '../src/assets/mehendi/JAY06628.jpg',
        '../src/assets/mehendi/JAY06847.jpg',
        '../src/assets/mehendi/JAY06921.jpg',
        '../src/assets/mehendi/JAY07120.jpg',
        '../src/assets/mehendi/JAY07128.jpg',
        '../src/assets/mehendi/JAY07217.jpg',
        '../src/assets/mehendi/JAY07242.jpg',
        '../src/assets/mehendi/JAY07253.jpg',
      ]
    },
    {
      title: 'Sangeet',
      description: 'A night filled with music, dance, and endless joy as our families celebrated our union.',
      images: [
        './src/assets/sangeet/JAY07367.jpg',
        './src/assets/sangeet/JAY07370.jpg',
      ],
      galleryImages: [
        '../src/assets/sangeet/JAY06479.jpg',
        '../src/assets/sangeet/JAY06489.jpg',
        '../src/assets/sangeet/JAY06504.jpg',
        '../src/assets/sangeet/JAY06532.jpg',
        '../src/assets/sangeet/JAY06535.jpg',
        '../src/assets/sangeet/JAY06584.jpg',
        '../src/assets/sangeet/JAY06605.jpg',
        '../src/assets/sangeet/JAY06628.jpg',
        '../src/assets/sangeet/JAY06847.jpg',
        '../src/assets/sangeet/JAY06921.jpg',
        '../src/assets/sangeet/JAY07120.jpg',
        '../src/assets/sangeet/JAY07128.jpg',
        '../src/assets/sangeet/JAY07217.jpg',
        '../src/assets/sangeet/JAY07242.jpg',
        '../src/assets/sangeet/JAY07253.jpg',
      ]
    },
    {
      title: 'Haldi',
      description: 'Blessed with turmeric and surrounded by the warmth of our loved ones.',
      images: [
        '/assets/haldi/preview1.jpg',
        '/assets/haldi/preview2.jpg',
      ],
      galleryImages: Array.from({ length: 12 }, (_, i) => `/assets/haldi/image${i + 1}.jpg`)
    },
    {
      title: 'Marriage',
      description: 'The moment we became one, promising forever under the sacred fire.',
      images: [
        '/assets/marriage/preview1.jpg',
        '/assets/marriage/preview2.jpg',
      ],
      galleryImages: Array.from({ length: 12 }, (_, i) => `/assets/marriage/image${i + 1}.jpg`)
    },
    {
      title: 'Reception',
      description: 'A grand celebration of our love with friends and family, dancing the night away in pure joy.',
      images: [
        '/assets/reception/preview1.jpg',
        '/assets/reception/preview2.jpg',
      ],
      galleryImages: Array.from({ length: 12 }, (_, i) => `/assets/reception/image${i + 1}.jpg`)
    }
  ];

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
          <Hero />
          <VideoReel />
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Wedding Journey</h2>
              <p className="text-lg text-gray-600">Reliving the beautiful moments of our special days</p>
            </div>
            <div className="space-y-24">
              {memories.map((memory, index) => (
                <MemorySection
                  key={memory.title}
                  {...memory}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      } />
      <Route path="/gallery/:event" element={<GalleryPage memories={memories} />} />
    </Routes>
  );
}

export default App;