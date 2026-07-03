"use client";
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailModal = ({ project, visible, onClose }) => {
  const { title, tagline, images = [], mechanics = [], impact = [], stack = [], icon: Icon } = project;
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setActiveIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setActiveIdx((i) => (i + 1) % images.length);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 transition-opacity duration-200 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`bg-secondary border border-border rounded-2xl shadow-2xl shadow-accent/20 w-full max-w-3xl flex flex-col overflow-hidden transition-transform duration-200 ease-out ${visible ? 'scale-100' : 'scale-95'}`}
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-gradient-to-r from-secondary to-primary flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {images[0] ? (
                <img src={images[0]} alt="" className="w-full h-full object-cover" />
              ) : (
                Icon && <Icon className="text-accent text-xl" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-text-primary leading-tight truncate">{title}</h3>
              {tagline && <p className="text-text-secondary text-xs mt-0.5">{tagline}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-text-secondary hover:text-text-primary transition-colors p-1.5 hover:bg-border rounded-lg flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-8">
          {images.length > 0 && (
            <div>
              <div className="relative rounded-xl overflow-hidden border border-border bg-primary h-56 sm:h-72">
                <img
                  src={images[activeIdx]}
                  alt={`${title} screenshot ${activeIdx + 1}`}
                  className="w-full h-full object-contain"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-secondary/90 hover:bg-secondary border border-border hover:border-accent rounded-full text-text-primary transition-colors duration-200"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-secondary/90 hover:bg-secondary border border-border hover:border-accent rounded-full text-text-primary transition-colors duration-200"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActiveIdx(i)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        i === activeIdx ? 'border-accent' : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {mechanics.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-accent uppercase tracking-wide mb-3">How It Works</h4>
              <ul className="space-y-2.5">
                {mechanics.map((m, i) => (
                  <li key={i} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent mt-0.5 flex-shrink-0">▹</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {impact.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-accent uppercase tracking-wide mb-3">Impact &amp; Value</h4>
              <ul className="space-y-2.5">
                {impact.map((m, i) => (
                  <li key={i} className="flex gap-2.5 text-text-secondary text-sm leading-relaxed">
                    <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {stack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {stack.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/60 border border-border rounded-full text-text-secondary text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
