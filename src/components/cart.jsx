import React, {useState,  useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CartContext} from './cartContext';
import products from './products'


const Cart = () => {

  const [items, setItems] = useContext(CartContext)
  const berenjenas = items.filter(x => x==='berenjena').length
  const costinas = items.filter(x => x==='costina').length
  const escarolas = items.filter(x => x==='escarola').length
  const espinacas = items.filter(x => x==='espinacas').length
  const pimentonesA = items.filter(x => x==='pimenton-amarillo').length
  const pimentonesV = items.filter(x => x==='pimenton-verde').length
  const tomates = items.filter(x => x==='tomate').length
  const zanahorias = items.filter(x => x==='zanahoria').length

  const [total] = useState(
    berenjenas*products[0].price +
    costinas*products[1].price +
    escarolas*products[2].price +
    espinacas*products[3].price +
    pimentonesA*products[4].price +
    pimentonesV*products[5].price +
    tomates*products[6].price +
    zanahorias*products[7].price  
  )

  
  return(
    <div>
      {total}
    </div>
  )
}

export default Cart