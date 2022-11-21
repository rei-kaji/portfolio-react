import React, { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import PhotoModal from "./PhotoModal";

const MyFavorite = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoImage, setPhotoImage] = useState();
  const ShowModal = () => {
    setShowModal(true);
  };
  return (
    <section id="myfavorite">
      <div className="container">
        <h2>My Favorite</h2>
        <p>
          I enjoy a lot of things in my life. Especially Photograph, Travel and
          Fishing.
          <br /> I'll introduce my favorite things through my photograph.
        </p>
        <div className="myfavorite_contents">
          <h3>Travel</h3>
          <PhotoGallery
            category="travel"
            setPhotoImage={setPhotoImage}
            setShowModal={setShowModal}
          />
        </div>
        <div className="myfavorite_contents">
          <h3>Fishing</h3>
          <PhotoGallery
            category="fishing"
            setPhotoImage={setPhotoImage}
            setShowModal={setShowModal}
          />
        </div>

        <PhotoModal
          image={photoImage}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </section>
  );
};

export default MyFavorite;
