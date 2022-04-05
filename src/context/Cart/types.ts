import { Product } from "../../types/Product"

interface ICartContext {
  cart: Product[];
  totalProducts: number;
  totalPrice: number;
  totalQuantity: number;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

export default ICartContext;
