import { Container, DetailsCar, InfoCar } from "./styles";

interface CardCarProps {
  car: {
    image: string;
    title: string;
    price: string;
    description: string;
    date: string;
    time: string;
    location: string;
  }
}
function CardCar({ car }: CardCarProps) {
  return (
    <Container>
      <img src={car.image} alt="Foto carro" />

      <InfoCar>
        <DetailsCar>
          <div>
            <span>{car.title}</span>
            <strong>{car.price}</strong>
            <p>{car.description}</p>
          </div>

          <div>
            <strong>{car.date.split(',')[0]}</strong>
            <strong>{car.time.split(',')[1]}</strong>
          </div>
        </DetailsCar>

        <strong>{car.location}</strong>
      </InfoCar>
    </Container>
  );
}

export default CardCar;