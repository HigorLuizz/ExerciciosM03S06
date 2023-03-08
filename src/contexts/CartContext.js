// inicializar o contexto

import { createContext } from "react";

export const CartContext = createContext()

// Montar o provedor

export const CartProvider = ({children}) => {

  return (
    <CartContext.Provider value={{
      message: 'Bom dia',
      data: [],
      teste: ''
    }}>
      {children}
    </CartContext.Provider>
  )
}
