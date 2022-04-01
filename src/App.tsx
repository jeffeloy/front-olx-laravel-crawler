import { DefaultTheme, ThemeProvider } from "styled-components";
import Routes from "./routes";
import { GlobalStyleCss } from "./styles/GlobalStyle";
import { usePersistedstate } from './hooks/usePersistedstate';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedstate<DefaultTheme>('theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleCss />
      <Routes onToggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;