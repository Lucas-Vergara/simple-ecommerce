import React, {useState, createContext} from 'react';

export const CartContext = createContext();

export const Provider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={[items, setItems]}>
      {props.children}
    </CartContext.Provider>
  );
};