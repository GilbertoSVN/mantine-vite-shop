import { useContext } from "react"
import { CartContext, ICartContext } from "../../context/Cart"

function Cart(): JSX.Element {
  const { cart } = useContext(CartContext) as ICartContext

  console.log(cart)

  return (
    <div>
      { cart.map(item => <div>{item.description}</div>) }
    </div>
  )
}

export default Cart
