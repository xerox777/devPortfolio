import React, {useState, useEffect} from 'react';

const Card = ({ media, title, description, link }) => {
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
    <div className="mx-auto max-w-sm mb-4 bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      {isVideo ?
      (
        <video src={media}
        controls
        className="w-full h-48 object-cover"/>
      ) : (

        <img src={media} alt={title} className="w-full h-48 object-cover" onClick={() => openModal(media)}/>
      )}
      {isOpen && (

      <div className="min-w-screen min-h-screen fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={closeModal} >
          <div  className=" max-w-screen max-h-[90vh] p-4"
            onClick={closeModal}>
        <img  src={selectedImg} alt={title} className="max-w-full h-auto rounded-lg shadow-lg object-contain max-h-[80vh] transform scale-125 transition duration-300" onClick={() => openModal(media)}/>
            </div>
      </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-600 hover:underline text-sm font-medium"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
