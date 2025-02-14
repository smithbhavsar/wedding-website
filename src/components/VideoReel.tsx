import React from 'react';

const VideoReel = () => {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full md:w-[50%] h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='/assets/wedding-reel.mp4'
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Wedding Story</h2>
            <p className="text-xl max-w-2xl mx-auto">
              A beautiful journey that led to forever
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute inset-0">
        <div className="w-full h-full">
          <video
            className="w-full h-full object-cover blur-xl scale-110 opacity-30"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src='/assets/wedding-reel.mp4'
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoReel;