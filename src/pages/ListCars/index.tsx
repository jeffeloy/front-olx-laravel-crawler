import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import CardCar from "../../components/CardCar/CardCar";
import { Icon } from "@iconify/react";
import logoImg from "../../assets/header-logo.svg";
import arrowDown from "@iconify/icons-mdi/arrow-down-circle";
import arrowUp from "@iconify/icons-mdi/arrow-up-circle";

import { Container, Header } from "./styles";

interface Car {
  image: string;
  title: string;
  price: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

function ListCars() {
  const location = useLocation();
  const cars: Car[] = location.state.cars;

  var settings = {
    dots: false,
    infinite: true,
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
        <img src={logoImg} alt="Logo" />
        <h1>One Search</h1>
      </Header>
      <Container>
        {cars.length > 0 ? (
          <Slider {...settings}>
            {cars.map(car => (
              <CardCar car={car} />
            ))}
          </Slider>
        )
          : (
            <div className="not-found-content">
              <h1>Nenhum anúncio encontrado nessa busca!</h1>
            </div>
          )}

      </Container>
    </>
  );
}

export default ListCars;