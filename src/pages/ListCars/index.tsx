import Slider from "react-slick";
import CardCar from "../../components/CardCar/CardCar";
import { Icon } from "@iconify/react";
import { ThemeContext } from 'styled-components';
import arrowRight from "@iconify/icons-mdi/arrow-right-circle";
import arrowLeft from "@iconify/icons-mdi/arrow-left-circle";

import { Container } from "./styles";


function ListCars() {
  var settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    adaptiveHeight: true,
    nextArrow: <Icon icon={arrowRight}
      width={30}
      height={30}
      color={'#1B1B21'} />,
    prevArrow: <Icon icon={arrowLeft}
      width={30}
      height={30}
      color={'#1B1B21'} />,
  };

  return (
    <Container>
      <Slider {...settings} className="slider-center">
        <CardCar />
        <CardCar />
        <CardCar />
        <CardCar />
      </Slider>
    </Container>
  );
}

export default ListCars;