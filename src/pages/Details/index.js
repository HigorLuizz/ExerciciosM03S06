import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

import { generateDiscount } from '../../utils/generateDiscount';
import { priceFormat } from '../../utils/priceFormat';


const Details = () => {

  const data = useLocation()
  const [amount, setAmount] = useState(1)

  const discount = generateDiscount(data.state.price, data.state.discount)
  const discountFormatted = priceFormat(discount.valorComDesconto)

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
            <span>
              <span style={{ textDecoration: 'line-through' }}>{data.state.priceFormatted}</span>
              <span> - {discountFormatted}</span>
            </span>
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