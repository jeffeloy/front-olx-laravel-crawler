import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyleCss } from "./styles/GlobalStyle";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyleCss />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
