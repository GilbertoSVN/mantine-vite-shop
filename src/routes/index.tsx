import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import routes from "./constants/routes";

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        { routes.map(({ path, element: Element }, id) => <Route key={id} path={path} element={<Element />} />) }
      </Switch>
    </BrowserRouter>
  );
}
