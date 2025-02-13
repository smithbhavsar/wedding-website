import React from 'react';
import { X } from 'lucide-react';

interface GalleryViewProps {
  event: {
    title: string;
    galleryImages: string[];
  };
  onClose: () => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">{event.title} Gallery</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`${event.title} Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryView;