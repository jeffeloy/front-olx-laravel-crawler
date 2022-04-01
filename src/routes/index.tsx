import { Routes as BrowserRoutes, Route, Link } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { usePersistedstate } from '../hooks/usePersistedstate';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import Home from "../pages/Home";

interface RoutesProps {
  onToggleTheme: () => void;
}


function Routes({onToggleTheme}: RoutesProps) {
  return (
    <BrowserRoutes>
      <Route index element={<Home onToggleTheme={onToggleTheme} />} />
    </BrowserRoutes>
  );
}

export default Routes;