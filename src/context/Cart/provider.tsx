import { ReactNode, useMemo, useState } from "react";
import { Product } from "../../types/Product";
import CartContext from "./state";

interface CartProduct extends Product {
  quantity: number;
}

export const CartProvider: React.FC<ReactNode> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const { totalProducts, totalPrice, totalQuantity } = useMemo(() => cart.reduce((acc, product) => {
    acc.totalProducts += 1;
    acc.totalPrice += product.price * product.quantity;
    acc.totalQuantity += product.quantity;

    return acc;
  }, {
    totalProducts: 0,
    totalPrice: 0,
    totalQuantity: 0,
  }), [cart])

  const addProduct = (product: Product) => {
    if (!Object.keys(product).length)
      return;

    const productId = product.id;

    if (totalProducts === 0) {
      const newProduct: CartProduct = Object.assign({ quantity: 1 }, product);

      setCart([newProduct]);

      return;
    }

    const productInCartIdx = cart.findIndex(product => product.id === productId);

    if (productInCartIdx >= 0) {
      const productList = [...cart];
      productList[productInCartIdx].quantity += 1;
      
      setCart(productList);

      return;
    }

    const newProduct: CartProduct = Object.assign({ quantity: 1 }, product);
    const productList = [...cart, newProduct];

    setCart(productList);

    return;
  }

  const removeProduct = (id: string) => {
    const productExistsIdx = cart.findIndex(product => product.id === id);

    if (productExistsIdx < 0)
      return;

    const productList = [...cart];

    if (productList[productExistsIdx].quantity === 1) {
      productList.splice(productExistsIdx, 1)

      setCart(productList);

      return;
    }

    productList[productExistsIdx].quantity -= 1;

    setCart(productList);

    return;
  }

  return (
    <CartContext.Provider value={{
      cart,
      totalProducts,
      totalPrice,
      totalQuantity,
      addProduct,
      removeProduct
    }}>
     {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
