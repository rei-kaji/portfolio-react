import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import PhotoModal from "./PhotoModal";
import returnButton from "../../assets/return1.svg";

const MyFavorite = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoImage, setPhotoImage] = useState();
  const ShowModal = () => {
    setShowModal(true);
  };
  return (
    <section id="myfavorite">
      <div className="container">
        <Link className="returnButton" to={"/"} state={{ state: "return" }}>
          <img src={returnButton} alt="" />
        </Link>
        <h2>My Favorites</h2>
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

        <div className="go_home">
          <Link
            className="btn btn-primary btn-link"
            to={"/"}
            state={{ state: "return" }}
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyFavorite;
