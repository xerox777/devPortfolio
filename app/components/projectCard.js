"use client";
import React from 'react';
import { createPortal } from 'react-dom';
import useModalTransition from './useModalTransition';
import ProjectDetailModal from './projectDetailModal';

const ProjectCard = ({ project }) => {
  const { icon: Icon, images = [], title, description } = project;
  const thumbnail = images[0];
  const { isOpen, visible, open, close } = useModalTransition();

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="text-left w-full max-w-sm bg-gradient-to-br from-secondary to-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 border border-border hover:border-accent group cursor-pointer"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary h-48">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
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
          <span className="inline-flex items-center gap-2 text-accent group-hover:text-accent-light font-semibold text-sm transition-colors duration-300">
            View Details →
          </span>
        </div>
      </button>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <ProjectDetailModal project={project} visible={visible} onClose={close} />,
        document.body
      )}
    </>
  );
};

export default ProjectCard;
