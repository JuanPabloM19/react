import { Link } from "react-router-dom"
import { useCarritoContext } from "../../Context/CartContext.js"

export const CartWidget = () => {
  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <button className="btn btn-dark cartWidget">
        <Link to={"/cart"} className="nav-link carro">
          <img href="./assets/cart1.png" alt="cart" width="50"/>0
          {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </Link>
      </button>

    </>
  )
}