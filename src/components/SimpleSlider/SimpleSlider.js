import React from "react";
import Slider from "react-slick";

import bathroom4 from '../../assets/images/bathroom4.jpeg';
import radiator1 from '../../assets/images/radiator1.jpeg';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={bathroom4} />
        </div>
        <div>
          <img src={radiator1} />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;