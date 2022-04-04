import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  background: #FFFFFF;
  margin-inline: auto;
  margin-top: 10% !important;
  padding: 3rem 0;

  .slick-slide{
    display: grid;
    place-items: center;
    align-self: center;
    margin: auto;
  }

  .slick-next {
    right: -25px;
    width: 50px;
    height: 50px;
  }

  .slick-prev {
    width: 50px;
    height: 50px;
  }

  .not-found-content{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80vh;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  background: #373743;
  overflow: hidden;
  position: fixed;
  top: 0; 
  padding: 3rem 1rem;

  .container-img {
    margin-top: -3rem;
    width: 200px;
    height: 200px;
  }
  img {
    width: 100%;
  }

  h1 {
    color: #6956BC;
  }

  button {
    background: transparent;
    border: 0;
  }
`;