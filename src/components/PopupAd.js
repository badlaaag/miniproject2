import React, { useState, useEffect } from "react";

const PopupAd = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

 
  return (
    <>
      {isOpen && (
        <div className="popup-ad">
          <div className="popup-content">
            <button className="close-btn" onClick={handleClose}>
              X
            </button>
            <h2 className="popup-title">Popup Advertisement</h2>
            <p className="popup-text">Here goes your advertisement content.</p>
            <div className="popup-video">
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAd;