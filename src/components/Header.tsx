import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function Header() {
  const cart = useContext(CartContext);

  return (
    <header>
      <Link className="logo" to="/">
        Shop
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>{cart.UserCart.length}</span>
      </Link>
    </header>
  );
}

export default Header;
