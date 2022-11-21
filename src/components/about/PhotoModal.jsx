import React from "react";

// const modalContent = {
//   background: "white",
//   padding: "10px",
//   borderRadius: "3px",
// };

// const overlay = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0,0,0,0.5)",

//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

const PhotoModal = ({ image, showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div id="overlay" onClick={closeModal}>
          <div id="modalContent">
            <img src={image} alt="" onClick={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoModal;
