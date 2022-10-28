// react-slick 関連のインポート
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  require("../../assets/portfolio.png"),
  require("../../assets/portfolio1.jpg"),
  require("../../assets/portfolio2.jpg"),
  require("../../assets/portfolio3.jpg"),
  require("../../assets/portfolio4.jpg"),
];

const ImageList = images.map((image, index) => (
  <div key={index}>
    <img src={image} className="SlideImage" alt="" />
  </div>
));

const SliderImage = () => {
  const settings = {
    slidesToShow: 1, // 1フレームで表示するスライド数
    slidesToScroll: 1, // 一度にスライドする数
    dots: false, // 下部のドットを非表示
    arrows: false, // 左右の<>を非表示
    adaptiveHeight: true, // 内部コンテンツに合わせてスライドの高さを自動調整
    infinite: true, // スライドを繰り返す
    lazyLoad: true, // スライド表示する時に画像を取得する
    speed: 500, // スライドアニメーションのスピード(ミリ秒)
    autoplay: true, // 自動再生
    pauseOnHover: false, // マウスカーソルをスライドにのせた時に再生を止めない
    autoplaySpeed: 8000, // 自動再生で切り替わる間隔(ミリ秒)
  };

  return <Slider {...settings}>{ImageList}</Slider>;
};

export default SliderImage;
