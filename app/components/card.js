import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import useModalTransition from './useModalTransition';

const Card = ({ media, title, description, link, icon: Icon }) => {
  const isVideo = media?.endsWith('.mp4');
  const isZoomable = media && !isVideo;
  const { isOpen, visible, open, close } = useModalTransition();

  const openModal = () => {
    if (isZoomable) open();
  };

  return (
    <div className="max-w-sm bg-gradient-to-br from-secondary to-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 border border-border hover:border-accent group">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary h-48">
        {media ? (
          isVideo ? (
            <video src={media}
            controls
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
          ) : (
            <img
              src={media}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
              onClick={openModal}
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {Icon && <Icon className="text-6xl text-accent/40" />}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300 mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold text-sm transition-colors duration-300"
          >
            View Project →
          </a>
        )}
      </div>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 transition-opacity duration-200 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-secondary/90 hover:bg-secondary border border-border hover:border-accent rounded-full text-text-primary transition-colors duration-200"
          >
            <X size={20} />
          </button>
          <img
            src={media}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain transition-transform duration-200 ease-out ${visible ? 'scale-100' : 'scale-95'}`}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default Card;
