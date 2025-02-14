import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-start justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src='/assets/wedding-bg.jpg'
          alt="Wedding Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative text-center text-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
          Happy 2nd Anniversary
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl mb-8 italic animate-fade-in-delay">
          "Two years of love, laughter, and countless beautiful moments together"
        </p>
        <p className="text-base sm:text-xl max-w-2xl mx-auto animate-fade-in-delay-2">
          My dearest wife, every moment with you feels like a blessing. 
          Here's to many more years of love and happiness.
        </p>
      </div>
    </div>
  );
}

export default Hero;
