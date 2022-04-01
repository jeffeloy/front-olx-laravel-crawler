import { Routes as BrowserRoutes, Route, Link } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { usePersistedstate } from '../hooks/usePersistedstate';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import Home from "../pages/Home";

function Routes() {
  const [theme, setTheme] = usePersistedstate<DefaultTheme>('theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRoutes>
        <Route index element={<Home onToggleTheme={toggleTheme} />} />
      </BrowserRoutes>
    </ThemeProvider>
  );
}

export default Routes;