import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider__item">
            <img src="../images/slider_image1.jpg" />
          </div>
          <div className="slider__item">
            <img src="../images/slider_image2.png" />
          </div>
          <div className="slider__item">
            <img src="../images/slider_image3.jpg" />
          </div>
          <div className="slider__item">
            <img src="../images/slider_image4.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo