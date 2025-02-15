import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Heart, ArrowUp } from 'lucide-react';
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
        'assets/mehendi/JAY07217.JPG',
        'assets/mehendi/JAY06489.JPG',
      ],
      galleryImages: [
        '/assets/mehendi/JAY06479.JPG',
        '/assets/mehendi/JAY06489.JPG',
        '/assets/mehendi/JAY06504.JPG',
        '/assets/mehendi/JAY06532.JPG',
        '/assets/mehendi/JAY06535.JPG',
        '/assets/mehendi/JAY06584.JPG',
        '/assets/mehendi/JAY06605.JPG',
        '/assets/mehendi/JAY06628.JPG',
        '/assets/mehendi/JAY06847.JPG',
        '/assets/mehendi/JAY06921.JPG',
        '/assets/mehendi/JAY07120.JPG',
        '/assets/mehendi/JAY07128.JPG',
        '/assets/mehendi/JAY07217.JPG',
        '/assets/mehendi/JAY07242.JPG',
        '/assets/mehendi/JAY07253.JPG',
      ],
      backgroundImage: "/assets/mehendi-bg.png"
    },
    {
      title: 'Sangeet',
      description: 'A night filled with music, dance, and endless joy as our families celebrated our union.',
      images: [
        'assets/sangeet/JAY07367.JPG',
        'assets/sangeet/JAY07370.JPG',
      ],
      galleryImages: [
        '/assets/sangeet/JAY07283.JPG',
        '/assets/sangeet/JAY07329.JPG',
        '/assets/sangeet/JAY07330.JPG',
        '/assets/sangeet/JAY07364.JPG',
        '/assets/sangeet/JAY07367.JPG',
        '/assets/sangeet/JAY07370.JPG',
        '/assets/sangeet/JAY07391.JPG',
        '/assets/sangeet/JAY07401.JPG',
        '/assets/sangeet/JAY07410.JPG',
        '/assets/sangeet/JAY07461.JPG',
        '/assets/sangeet/JAY07481.JPG',
        '/assets/sangeet/JAY07514.JPG',
        '/assets/sangeet/JAY07526.JPG',
        '/assets/sangeet/JAY07529.JPG',
        '/assets/sangeet/JAY07545.JPG',
        '/assets/sangeet/JAY07550.JPG',
        '/assets/sangeet/JAY07608.JPG',
        '/assets/sangeet/JAY07623.JPG',
        '/assets/sangeet/JAY07703.JPG',
        '/assets/sangeet/JAY07737.JPG',
        '/assets/sangeet/JAY07763.JPG',
        '/assets/sangeet/JAY07769.JPG',
        '/assets/sangeet/JAY07785.JPG',
        '/assets/sangeet/JAY07858.JPG',
        '/assets/sangeet/JAY07926.JPG',
        '/assets/sangeet/JAY07950.JPG',
        '/assets/sangeet/JAY07975.JPG',
        '/assets/sangeet/JAY07996.JPG',
        '/assets/sangeet/JAY08017.JPG',
        '/assets/sangeet/JAY08041.JPG',
        '/assets/sangeet/JAY08115.JPG',
        '/assets/sangeet/JAY08135.JPG',
        '/assets/sangeet/JAY08156.JPG',
        '/assets/sangeet/JAY08178.JPG',
        '/assets/sangeet/JAY08191.JPG',
        '/assets/sangeet/JAY08200.JPG',
        '/assets/sangeet/JAY08216.JPG',
        '/assets/sangeet/JAY08233.JPG',
        '/assets/sangeet/JAY08258.JPG',
        '/assets/sangeet/JAY08264.JPG',
        '/assets/sangeet/JAY08311.JPG',
        '/assets/sangeet/JAY08448.JPG',
        '/assets/sangeet/JAY08462.JPG',
        '/assets/sangeet/JAY08465.JPG',
        '/assets/sangeet/JAY08479.JPG',
        '/assets/sangeet/JAY08487.JPG',
        '/assets/sangeet/JAY08492.JPG'
      ],
      backgroundImage: "/assets/reception-bg.png"
    },
    {
      title: 'Haldi',
      description: 'Blessed with turmeric and surrounded by the warmth of our loved ones.',
      images: [
        'assets/haldi/JAY09338.JPG',
        'assets/haldi/JAY09339.JPG',
      ],
      galleryImages: [
        "/assets/haldi/JAY08505.JPG",
        "/assets/haldi/JAY08541.JPG",
        "/assets/haldi/JAY08557.JPG",
        "/assets/haldi/JAY08606.JPG",
        "/assets/haldi/JAY08667.JPG",
        "/assets/haldi/JAY08696.JPG",
        "/assets/haldi/JAY08711.JPG",
        "/assets/haldi/JAY08736.JPG",
        "/assets/haldi/JAY08826.JPG",
        "/assets/haldi/JAY08835.JPG",
        "/assets/haldi/JAY08847.JPG",
        "/assets/haldi/JAY08853.JPG",
        "/assets/haldi/JAY08875.JPG",
        "/assets/haldi/JAY08888.JPG",
        "/assets/haldi/JAY08892.JPG",
        "/assets/haldi/JAY08937.JPG",
        "/assets/haldi/JAY08953.JPG",
        "/assets/haldi/JAY08980.JPG",
        "/assets/haldi/JAY08992.JPG",
        "/assets/haldi/JAY09007.JPG",
        "/assets/haldi/JAY09024.JPG",
        "/assets/haldi/JAY09042.JPG",
        "/assets/haldi/JAY09051.JPG",
        "/assets/haldi/JAY09100.JPG",
        "/assets/haldi/JAY09125.JPG",
        "/assets/haldi/JAY09151.JPG",
        "/assets/haldi/JAY09163.JPG",
        "/assets/haldi/JAY09173.JPG",
        "/assets/haldi/JAY09176.JPG",
        "/assets/haldi/JAY09201.JPG",
        "/assets/haldi/JAY09209.JPG",
        "/assets/haldi/JAY09233.JPG",
        "/assets/haldi/JAY09239.JPG",
        "/assets/haldi/JAY09246.JPG",
        "/assets/haldi/JAY09252.JPG",
        "/assets/haldi/JAY09260.JPG",
        "/assets/haldi/JAY09281.JPG",
        "/assets/haldi/JAY09338.JPG",
        "/assets/haldi/JAY09339.JPG",
        "/assets/haldi/JAY09372.JPG",
        "/assets/haldi/JAY09381.JPG",
        "/assets/haldi/JAY09414.JPG",
        "/assets/haldi/JAY09451.JPG",
        "/assets/haldi/JSP00532.JPG",
        "/assets/haldi/JSP00541.JPG",
        "/assets/haldi/JSP00608.JPG",
        "/assets/haldi/JSP00632.JPG",
        "/assets/haldi/JSP00683.JPG",
        "/assets/haldi/JSP00710.JPG",
        "/assets/haldi/JSP00775.JPG",
        "/assets/haldi/JSP00810.JPG",
        "/assets/haldi/JSP00839.JPG",
        "/assets/haldi/JSP00842.JPG",
        "/assets/haldi/JSP00855.JPG",
        "/assets/haldi/JSP00870.JPG",
        "/assets/haldi/JSP00888.JPG",
        "/assets/haldi/JSP00908.JPG",
        "/assets/haldi/JSP00918.JPG",
        "/assets/haldi/JSP00987.JPG",
        "/assets/haldi/JSP00997.JPG",
        "/assets/haldi/JSP01060.JPG",
        "/assets/haldi/JSP01064.JPG",
        "/assets/haldi/JSP01072.JPG",
        "/assets/haldi/JSP01083.JPG",
        "/assets/haldi/JSP01114.JPG",
        "/assets/haldi/JSP01117.JPG",
        "/assets/haldi/JSP01149.JPG",
        "/assets/haldi/JSP01154.JPG",
        "/assets/haldi/JSP01183.JPG",
        "/assets/haldi/JSP01198.JPG",
        "/assets/haldi/JSP01203.JPG",
        "/assets/haldi/JSP01208.JPG",
        "/assets/haldi/JSP01211.JPG",
        "/assets/haldi/JSP01213.JPG",
        "/assets/haldi/JSP01239.JPG",
        "/assets/haldi/JSP01250.JPG",
        "/assets/haldi/JSP01272.JPG",
        "/assets/haldi/JSP01294.JPG",
        "/assets/haldi/JSP01301.JPG",
        "/assets/haldi/JSP01313.JPG",
        "/assets/haldi/JSP01337.JPG",
        "/assets/haldi/JSP01355.JPG",
      ],
      backgroundImage: "/assets/haldi-bg.png"
    },
    // {
    //   title: 'Marriage',
    //   description: 'The moment we became one, promising forever under the sacred fire.',
    //   images: [
    //     '/assets/marriage/preview1.jpg',
    //     '/assets/marriage/preview2.jpg',
    //   ],
    //   galleryImages: Array.from({ length: 12 }, (_, i) => `/assets/marriage/image${i + 1}.jpg`)
    // },
    {
      title: 'Reception',
      description: 'A grand celebration of our love with friends and family, dancing the night away in pure joy.',
      images: [
        'assets/reception/DSC06224.JPG',
        'assets/reception/DSC06322.JPG',
      ],
      galleryImages: [
        "/assets/reception/DSC05981.JPG",
        "/assets/reception/DSC05991.JPG",
        "/assets/reception/DSC06002.JPG",
        "/assets/reception/DSC06005.JPG",
        "/assets/reception/DSC06015.JPG",
        "/assets/reception/DSC06034.JPG",
        "/assets/reception/DSC06042.JPG",
        "/assets/reception/DSC06044.JPG",
        "/assets/reception/DSC06045.JPG",
        "/assets/reception/DSC06052.JPG",
        "/assets/reception/DSC06055.JPG",
        "/assets/reception/DSC06061.JPG",
        "/assets/reception/DSC06063.JPG",
        "/assets/reception/DSC06069.JPG",
        "/assets/reception/DSC06075.JPG",
        "/assets/reception/DSC06077.JPG",
        "/assets/reception/DSC06079.JPG",
        "/assets/reception/DSC06087.JPG",
        "/assets/reception/DSC06098.JPG",
        "/assets/reception/DSC06113.JPG",
        "/assets/reception/DSC06117.JPG",
        "/assets/reception/DSC06125.JPG",
        "/assets/reception/DSC06135.JPG",
        "/assets/reception/DSC06191.JPG",
        "/assets/reception/DSC06194.JPG",
        "/assets/reception/DSC06200.JPG",
        "/assets/reception/DSC06215.JPG",
        "/assets/reception/DSC06222.JPG",
        "/assets/reception/DSC06223.JPG",
        "/assets/reception/DSC06224.JPG",
        "/assets/reception/DSC06273.JPG",
        "/assets/reception/DSC06282.JPG",
        "/assets/reception/DSC06322.JPG",
        "/assets/reception/DSC06387.JPG",
        "/assets/reception/DSC06394.JPG",
        "/assets/reception/DSC06404.JPG",
        "/assets/reception/DSC06414.JPG",
        "/assets/reception/DSC06450.JPG",
        "/assets/reception/DSC06459.JPG",
        "/assets/reception/DSC06471.JPG",
        "/assets/reception/DSC06583.JPG",
        "/assets/reception/DSC06595.JPG",
        "/assets/reception/DSC06611.JPG",
        "/assets/reception/DSC06615.JPG",
        "/assets/reception/DSC06707.JPG",
      ],
      backgroundImage: "/assets/reception-bg.png"
    }
  ];

  // State to track when to show the scroll-to-top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
              <Hero />
              <VideoReel />
              <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Our Wedding Journey
                  </h2>
                  <p className="text-lg text-gray-600">
                    Reliving the beautiful moments of our special days
                  </p>
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
          }
        />
        <Route path="/gallery/:event" element={<GalleryPage memories={memories} />} />
      </Routes>

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
}

export default App;
