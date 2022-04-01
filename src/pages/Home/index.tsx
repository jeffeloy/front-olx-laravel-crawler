import {
  ContainerForm,
  ContainerImage,
  ContainerSelects,
  Content,
  Form,
  LogoImg,
  SwitchTheme
} from "./styles";

import { Icon } from "@iconify/react";
import { ThemeContext } from 'styled-components';
import brightness4 from "@iconify/icons-mdi/brightness-4";
import brightness7 from "@iconify/icons-mdi/brightness-7";
import logoImg from "../../assets/home-logo.svg";
import { useContext } from "react";

interface HeaderProps {
  onToggleTheme: () => void;
}

function Home({ onToggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  
  return (
    <Content>
      <SwitchTheme onClick={onToggleTheme}>
        <Icon
          icon={title === 'light' ? brightness4 : brightness7}
          width={30}
          height={30}
          color={title === 'light' ? '#1B1B21' : '#FCFCFC'}
        />
      </SwitchTheme>
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
