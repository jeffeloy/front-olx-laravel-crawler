import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  background: #FFFFFF;
  margin-inline: auto;
  margin-top: 5% !important;
  padding: 1rem 0;

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
  height: 6rem;
  background: #373743;
  overflow: hidden;
  position: fixed;
  top: 0; 
  padding: 0 1rem;

  img {
    width: 100px;
    height: 100px;
  }

  h1 {
    color: #917EDD;
  }
`;