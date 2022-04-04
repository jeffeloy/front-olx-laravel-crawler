import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CardCar from "../../components/CardCar/CardCar";
import { Icon } from "@iconify/react";
import logoImg from "../../assets/header-logo.svg";
import arrowDown from "@iconify/icons-mdi/arrow-down-circle";
import arrowUp from "@iconify/icons-mdi/arrow-up-circle";
import exit from "@iconify/icons-mdi/exit-to-app";

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
  const location: any = useLocation();
  const navigate = useNavigate();
  const cars: Car[] = location.state.cars;

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  function goBack() {
    navigate('/')
  }

  return (
    <>
      <Header>
        <div className="container-img">
          <img src={logoImg} alt="Logo" />
        </div>
        <h1>One Search</h1>
        <button onClick={goBack}>
          <Icon icon={exit}
            width={40}
            height={40}
            color={'#FFF'}
          />
        </button>
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