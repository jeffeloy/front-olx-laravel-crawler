import {
  ContainerForm,
  ContainerImage,
  ContainerSelects,
  Content,
  Form,
  LogoImg
} from "./styles";

import logoImg from "../../assets/home-logo.svg";

interface HeaderProps {
  onToggleTheme: () => void;
}

function Home({ onToggleTheme }: HeaderProps) {

  return (
    <Content>
      <button>Teste</button>
      <ContainerImage>
        <LogoImg src={logoImg} />
      </ContainerImage>
      <ContainerForm>
        <h1>One Search</h1>
        <Form>
          <label htmlFor="">Digite o que deseja buscar</label>
          <input type="text" placeholder="Ex: Palio Atractive" />

          <ContainerSelects>
            <select name="fuel" id="">
              <option value="">Selecione o combustivel</option>
              <option value="">Selecione o combustivel</option>
              <option value="">Selecione o combustivel</option>
            </select>

            <select name="doors" id="">
              <option value="">Selecione nº portas</option>
            </select>
          </ContainerSelects>

          <button type="submit">Buscar</button>
        </Form>
      </ContainerForm>
    </Content>
  );
}

export default Home;
