import { Routes as BrowserRoutes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRoutes>
      <Route index element={<Home />} />
    </BrowserRoutes>
  );
}

export default Routes;