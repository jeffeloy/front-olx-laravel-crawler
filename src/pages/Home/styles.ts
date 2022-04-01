import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--background);
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: var(--background-content);
`;
export const LogoImg = styled.img`
  width: 500px;
  height: 500px;
`;


export const ContainerForm = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;

  h1 {
    color: #7A63D6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  
  label {
    font-size: 16px;
    margin-bottom: 1rem;
  }

  input {
    height: 4rem;
    max-width: 500px;
    border: 1px solid #E2E2E1;
    border-radius: 0.5rem;
    padding: 0 1rem;
  }

  button {
    width: 60%;
    height: 4rem;
    align-self: center;
    margin-top: 2.5rem;
    border: 1px solid #E2E2E1;
    border-radius: 0.5rem;
    background: #866AE5;
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ContainerSelects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0;

  /* select {
    width: 48%;
    background: #FFF;
    height: 3rem;
    border: 1px solid #E2E2E1;
    border-radius: 0.5rem;
    padding: 0 0.7rem;
  } */
  select {
    outline: none;
    background: #FFF;
    padding: 0 0.7rem;
    width: 48%;
    height: 3rem;
    border: 1px solid #E2E2E1;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
  }
`;

