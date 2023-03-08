import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

const Details = () => {

  const {message} = useContext(CartContext)
  const data = useLocation()
  const [amount, setAmount] = useState(1)

  const handleAddProductInCart = () => {
  }

  const handleIncrementAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecrementAmount = () => {
    setAmount(amount - 1)
  }

  return (
    <div className='main-container'>
      {message}
      <div className='product-details'>
        <div>
          <img
            src={data.state.image}
            alt="foto do produto"
            className='product-details-photo'
          />
        </div>

        <div className='product-content'>
          <div>
            <h2>{data.state.name}</h2>
            <span>{data.state.priceFormatted}</span>
          </div>

          <div className='product-controls'>
            <div>
              <button onClick={handleAddProductInCart}>Adicionar a sacola</button>
            </div>

            <button
              onClick={handleDecrementAmount}
              disabled={amount === 1}
              >
                -
              </button>
            <span className='product-quantity'>{amount}</span>
            <button onClick={handleIncrementAmount}>+</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Details;