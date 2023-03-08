import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import {CartContext} from '../../contexts/CartContext'
import { ThemeContext } from "../../contexts/ThemeContext";


const Menu = () => {

  const {message} = useContext(CartContext)
  const { color } = useContext(ThemeContext)
  return (
    <header className="menu">
      <div className="menu-content">
        <h1>Clamed Farmácias {color}</h1>
        <ul>
          <li data-testid="cart-link">
            <FaCartPlus color="#fff" />
            Carrinho - {0} items
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
