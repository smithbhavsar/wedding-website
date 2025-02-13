import React from 'react';
import weddingVideo from '../assets/wedding-reel.mp4';


const VideoReel = () => {
  return (
    <div className="relative h-screen">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={weddingVideo}
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Wedding Story</h2>
          <p className="text-xl max-w-2xl mx-auto">
            A beautiful journey that led to forever
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoReel;