import Slider from "react-slick";
import CardCar from "../../components/CardCar/CardCar";
import { Icon } from "@iconify/react";
import arrowDown from "@iconify/icons-mdi/arrow-down-circle";
import arrowUp from "@iconify/icons-mdi/arrow-up-circle";

import { Container, Header } from "./styles";


function ListCars() {
  var settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    nextArrow:
      <Icon icon={arrowDown}
        width={30}
        height={30}
        color={'#1B1B21'}
      />,
    prevArrow:
      <Icon icon={arrowUp}
        width={30}
        height={30}
        color={'#1B1B21'}
      />,
  };

  return (
    <>
      <Header>
        <h1>One Search</h1>
      </Header>
      <Container>
        <Slider {...settings}>
          <CardCar />
          <CardCar />
          <CardCar />
          <CardCar />
        </Slider>
      </Container>
    </>
  );
}

export default ListCars;