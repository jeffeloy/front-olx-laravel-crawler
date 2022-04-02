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
import swapHorizontal from "@iconify/icons-mdi/swap-horizontal-bold";
import logoImg from "../../assets/home-logo.svg";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onToggleTheme: () => void;
}

function Home({ onToggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [fuel, setFuel] = useState('');
  const [doors, setDoors] = useState('');

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('crawler', {
      params: {
        search,
        fuel,
        numberDoors: doors
      }
    })

    navigate('/list-cars', { state: { cars: response.data } })
  };

  return (
    <Content>
      <SwitchTheme onClick={onToggleTheme}>
        <Icon
          icon={swapHorizontal}
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
        <Form onSubmit={handleSearch}>
          <label htmlFor="">Digite o que deseja buscar</label>
          <input
            type="text"
            placeholder="Ex: Palio Atractive"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <ContainerSelects>
            <select
              name="fuel"
              value={fuel}
              onChange={e => setFuel(e.target.value)}
            >
              <option value="">Selecione o combustivel</option>
              <option value="/gasolina">Gasolina</option>
              <option value="/alcool">Álcool</option>
              <option value="/gas-natural">Gás Natural</option>
            </select>

            <select
              name="doors"
              value={doors}
              onChange={e => setDoors(e.target.value)}
            >
              <option value="">Selecione nº portas</option>
              <option value="cad=1">2 Portas</option>
              <option value="cad=2">4 Portas</option>
            </select>
          </ContainerSelects>

          <button type="submit">Buscar</button>
        </Form>
      </ContainerForm>
    </Content>
  );
}

export default Home;
