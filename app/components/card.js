import React, {useState, useEffect} from 'react';

const Card = ({ media, title, description, link, icon: Icon }) => {
  const isVideo = media?.endsWith('.mp4');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImg("");
  };
  // 🔑 Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="max-w-sm bg-gradient-to-br from-secondary to-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 border border-border hover:border-accent group">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary h-48">
        {media ? (
          isVideo ? (
            <video src={media}
            controls
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
          ) : (
            <img src={media} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => openModal(media)}/>
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {Icon && <Icon className="text-6xl text-accent/40" />}
          </div>
        )}
      </div>
      {isOpen && (
        <div className="min-w-screen min-h-screen fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal} >
            <div  className=" max-w-screen max-h-[90vh] p-4"
              onClick={closeModal}>
          <img  src={selectedImg} alt={title} className="max-w-full h-auto rounded-lg shadow-lg object-contain max-h-[80vh] transform scale-125 transition duration-300" onClick={() => openModal(media)}/>
              </div>
        </div>
      )}
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
    </div>
  );
};

export default Card;
