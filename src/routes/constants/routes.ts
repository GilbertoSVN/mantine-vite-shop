import Cart from "../../pages/Cart"
import Catalogue from "../../pages/Catalogue"
import Confirmation from "../../pages/Confirmation"
import NotFound from "../../pages/NotFound"
import Product from "../../pages/Product"

const routes = [
  {
    path: "/",
    element: Catalogue
  },
  {
    path: "/cart",
    element: Cart
  },
  {
    path: "/confirmation",
    element: Confirmation
  },
  {
    path: "/product",
    element: Product
  },
  {
    path: '*',
    element: NotFound
  }
];

export default routes;
