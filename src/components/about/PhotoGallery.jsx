import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { travelImages, fishingImages } from "./PhotoStrage";

const PhotoGallery = ({ category, setShowModal, setPhotoImage }) => {
  let images = category == "travel" ? travelImages : fishingImages;

  const ImageList = images.map((image, index) => (
    <div key={index}>
      <img
        src={image}
        className="SlideImage"
        alt=""
        onClick={() => {
          setPhotoImage(image);
          setShowModal(true);
        }}
      />
    </div>
  ));

  const settings = {
    slidesToShow: 3, // 1フレームで表示するスライド数
    slidesToScroll: 1, // 一度にスライドする数
    dots: true, // 下部のドットを表示
    arrows: true, // 左右の<>を表示
    adaptiveHeight: true, // 内部コンテンツに合わせてスライドの高さを自動調整
    infinite: true, // スライドを繰り返す
    lazyLoad: true, // スライド表示する時に画像を取得する
    speed: 500, // スライドアニメーションのスピード(ミリ秒)
    autoplay: false, // 自動再生をしない
    pauseOnHover: false, // マウスカーソルをスライドにのせた時に再生を止めない
    autoplaySpeed: 3000, // 自動再生で切り替わる間隔(ミリ秒)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return <Slider {...settings}>{ImageList}</Slider>;
};

export default PhotoGallery;
