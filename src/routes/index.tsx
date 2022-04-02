import { Routes as BrowserRoutes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import ListCars from "../pages/ListCars";

interface RoutesProps {
  onToggleTheme: () => void;
}


function Routes({ onToggleTheme }: RoutesProps) {
  return (
    <BrowserRoutes>
      <Route index element={<Home onToggleTheme={onToggleTheme} />} />
      <Route path="/list-cars" element={<ListCars />} />
    </BrowserRoutes>
  );
}

export default Routes;