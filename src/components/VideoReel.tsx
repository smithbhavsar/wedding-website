import React, { useEffect, useRef, useState } from 'react';

const VideoReel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMuted(false); // Unmute when in view
        } else {
          setIsMuted(true); // Mute when out of view
        }
      },
      { threshold: 0.6 } // Adjust threshold for better visibility detection
    );

    const section = document.getElementById("video-reel-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id="video-reel-section" className="relative h-screen bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full md:w-[50%] h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted={isMuted} // Toggle mute based on visibility
          >
            <source src='/assets/wedding-reel.mp4' type="video/mp4" />
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
            loop
            playsInline
            muted
          >
            <source src='/assets/wedding-reel.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoReel;
