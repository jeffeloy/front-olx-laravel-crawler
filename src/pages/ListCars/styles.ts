import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  

  width: 100vw;
  height: 100vh;
  background: #FFFFFF;
`;

export const CardCar = styled.div`
  display: flex;
  flex-direction: row;

  width: 55rem;
  height: 16rem;
  /* padding: 0.5rem; */
  border: 1px solid #DDDDE3;
  border-radius: 1rem;
  background: #F4F4F6;

  img {
    width: 30%;
    height: 100%;
    object-fit: fill;
    border-radius: 1rem 0 0 1rem;
  }
`;

export const InfoCar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 70%;
  padding: 1rem;
`;

export const DetailsCar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:first-child{
    display: flex;
    flex-direction: column;

    span {
      font-size: 16px;
      font-weight: 500;
    }

    strong {
      display: block;
      font-size: 14px;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
    }
  }

  div:last-child{
    display: flex;
    flex-direction: column;
  }
`;