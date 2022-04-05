import { createContext } from "react";
import ICartContext from "./types";

const CartContext = createContext<ICartContext | null>(null);

export default CartContext;
