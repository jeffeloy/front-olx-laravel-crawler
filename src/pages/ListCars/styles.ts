import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  background: #FFFFFF;
  margin-inline: auto;
  margin-top: 5% !important;

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
`;

export const Header = styled.div`
  width: 100%;
  height: 6rem;
  background: #373743;
  overflow: hidden;
  position: fixed;
  top: 0; 
  padding: 1rem;

  h1 {
    color: #917EDD;
  }
`;