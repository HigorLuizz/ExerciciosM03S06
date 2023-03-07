import React from 'react';

const Details = () => {
  return (
    <div className='main-container'>

      <div className='product-details'>
        <div>
          <img
            src="https://www.farmasesi.com.br/estatico/sesi/images/produto/16534.png"
            alt="foto do produto"
            className='product-details-photo'
          />
        </div>

        <div className='product-content'>
          <div>
            <h2>Nome do produto</h2>
            <span>R$ 12,00</span>
          </div>

          <div className='product-controls'>
            <div>
              <button>Adicionar a sacola</button>
            </div>
            <button>-</button>
            <span className='product-quantity'>1</span>
            <button>+</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Details;