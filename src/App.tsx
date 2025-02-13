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
        'https://images.unsplash.com/photo-1604430456280-43f652c497aa?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1587473555771-96aedec8f196?auto=format&fit=crop&q=80&w=1200',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1604430456280-43f652c497aa?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1587473555771-96aedec8f196?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1617206674438-1a293860d462?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1630932362402-4e9f2b64c0bf?auto=format&fit=crop&q=80&w=1200',
      ]
    },
    {
      title: 'Sangeet',
      description: 'A night filled with music, dance, and endless joy as our families celebrated our union.',
      images: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200',
      ]
    },
    {
      title: 'Haldi',
      description: 'Blessed with turmeric and surrounded by the warmth of our loved ones.',
      images: [
        'https://images.unsplash.com/photo-1630932362402-4e9f2b64c0bf?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1617206674438-1a293860d462?auto=format&fit=crop&q=80&w=1200',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1630932362402-4e9f2b64c0bf?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1617206674438-1a293860d462?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1604430456280-43f652c497aa?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1587473555771-96aedec8f196?auto=format&fit=crop&q=80&w=1200',
      ]
    },
    {
      title: 'Marriage',
      description: 'The moment we became one, promising forever under the sacred fire.',
      images: [
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80&w=1200',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
      ]
    },
    {
      title: 'Reception',
      description: 'A grand celebration of our love with friends and family, dancing the night away in pure joy.',
      images: [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
      ]
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