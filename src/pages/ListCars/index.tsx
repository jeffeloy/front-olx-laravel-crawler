import { CardCar, Container, DetailsCar, InfoCar } from "./styles";

function ListCars() {
  return (
    <Container>
      <CardCar>
        <img src="https://img2.icarros.com/dbimg/imgadicionalnoticia/4/105564_1" alt="Foto carro" />

        <InfoCar>
          <DetailsCar>
            <div>
              <span>Palio Atrative</span>
              <strong>R$20.000</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto nihil velit libero quidem corrupti, dicta quis reprehenderit voluptatibus illum, nulla labore doloribus sit minima quo? Excepturi omnis hic eaque?</p>
            </div>

            <div>
              <strong>Ontem</strong>
              <strong>18:30</strong>
            </div>
          </DetailsCar>

          <strong>Salvador</strong>
        </InfoCar>
      </CardCar>
      <CardCar>
        <img src="https://img2.icarros.com/dbimg/imgadicionalnoticia/4/105564_1" alt="Foto carro" />

        <InfoCar>
          <DetailsCar>
            <div>
              <span>Palio Atrative</span>
              <strong>R$20.000</strong>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto nihil velit libero quidem corrupti, dicta quis reprehenderit voluptatibus illum, nulla labore doloribus sit minima quo? Excepturi omnis hic eaque?</p>
            </div>

            <div>
              <strong>Ontem</strong>
              <strong>18:30</strong>
            </div>
          </DetailsCar>
          <strong>Salvador</strong>
        </InfoCar>
      </CardCar>
    </Container>
  );
}

export default ListCars;