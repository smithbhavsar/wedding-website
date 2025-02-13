import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Hero from './components/Hero';
import VideoReel from './components/VideoReel';
import MemorySection from './components/MemorySection';
import GalleryPage from './components/GalleryPage';

function App() {
  const memories = [
    {
      title: 'Mehendi',
      description: 'The beautiful beginning of our wedding celebrations, where art and love intertwined on your hands.',
      images: [
        './src/assets/mehendi/JAY07217.jpg',
        './src/assets/mehendi/JAY06489.jpg',
      ],
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
        '../src/assets/sangeet/JAY07283.JPG',
        '../src/assets/sangeet/JAY07329.JPG',
        '../src/assets/sangeet/JAY07330.JPG',
        '../src/assets/sangeet/JAY07364.JPG',
        '../src/assets/sangeet/JAY07367.JPG',
        '../src/assets/sangeet/JAY07370.JPG',
        '../src/assets/sangeet/JAY07391.JPG',
        '../src/assets/sangeet/JAY07401.JPG',
        '../src/assets/sangeet/JAY07410.JPG',
        '../src/assets/sangeet/JAY07461.JPG',
        '../src/assets/sangeet/JAY07481.JPG',
        '../src/assets/sangeet/JAY07514.JPG',
        '../src/assets/sangeet/JAY07526.JPG',
        '../src/assets/sangeet/JAY07529.JPG',
        '../src/assets/sangeet/JAY07545.JPG',
        '../src/assets/sangeet/JAY07550.JPG',
        '../src/assets/sangeet/JAY07608.JPG',
        '../src/assets/sangeet/JAY07623.JPG',
        '../src/assets/sangeet/JAY07703.JPG',
        '../src/assets/sangeet/JAY07737.JPG',
        '../src/assets/sangeet/JAY07763.JPG',
        '../src/assets/sangeet/JAY07769.JPG',
        '../src/assets/sangeet/JAY07785.JPG',
        '../src/assets/sangeet/JAY07858.JPG',
        '../src/assets/sangeet/JAY07926.JPG',
        '../src/assets/sangeet/JAY07950.JPG',
        '../src/assets/sangeet/JAY07975.JPG',
        '../src/assets/sangeet/JAY07996.JPG',
        '../src/assets/sangeet/JAY08017.JPG',
        '../src/assets/sangeet/JAY08041.JPG',
        '../src/assets/sangeet/JAY08115.JPG',
        '../src/assets/sangeet/JAY08135.JPG',
        '../src/assets/sangeet/JAY08156.JPG',
        '../src/assets/sangeet/JAY08178.JPG',
        '../src/assets/sangeet/JAY08191.JPG',
        '../src/assets/sangeet/JAY08200.JPG',
        '../src/assets/sangeet/JAY08216.JPG',
        '../src/assets/sangeet/JAY08233.JPG',
        '../src/assets/sangeet/JAY08258.JPG',
        '../src/assets/sangeet/JAY08264.JPG',
        '../src/assets/sangeet/JAY08311.JPG',
        '../src/assets/sangeet/JAY08448.JPG',
        '../src/assets/sangeet/JAY08462.JPG',
        '../src/assets/sangeet/JAY08465.JPG',
        '../src/assets/sangeet/JAY08479.JPG',
        '../src/assets/sangeet/JAY08487.JPG',
        '../src/assets/sangeet/JAY08492.JPG'
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