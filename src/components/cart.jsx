import React, {useContext} from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CartContext} from './cartContext';
import products from './products'
import pluralize from 'pluralize'
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

pluralize.addPluralRule(/dad$/i, 'dades')



const Cart = () => {

  const [items, setItems] = useContext(CartContext)
  const berenjenas = items.filter(x => x==='Berenjena')
  const costinas = items.filter(x => x==='Costina')
  const escarolas = items.filter(x => x==='Escarola')
  const espinacas = items.filter(x => x==='Espinaca')
  const pimentonesA = items.filter(x => x==='Pimentón Amarillo')
  const pimentonesV = items.filter(x => x==='Pimentón Verde')
  const tomates = items.filter(x => x==='Tomate')
  const zanahorias = items.filter(x => x==='Zanahoria')

  let total = (
    berenjenas.length*products[0].price +
    costinas.length*products[1].price +
    escarolas.length*products[2].price +
    espinacas.length*products[3].price +
    pimentonesA.length*products[4].price +
    pimentonesV.length*products[5].price +
    tomates.length*products[6].price +
    zanahorias.length*products[7].price  
  )

  let summary = []
  let list = []

  const checkAmount = (newProduct, id) => {
    if (newProduct.length > 0) {
      let unit = products[id].unit
      let length = newProduct.length
      if (products[id].unit === '500 gr') {
        length = length/2
        unit = 'kg'
      }
      let  next = products[id].name + ': ' + pluralize(unit, length, true)
      summary = [...summary, next]
      list.push([newProduct, id])
    }
  }
  
  checkAmount(berenjenas, 0);checkAmount(costinas, 1);checkAmount(escarolas, 2);checkAmount(espinacas, 3);
  checkAmount(pimentonesA, 4);checkAmount(pimentonesV, 5);checkAmount(tomates, 6);checkAmount(zanahorias, 7);

  const increment = (event, product) => {
    event.preventDefault()
    setItems([...items, product]);
  }

  const decrement = (event, product) => {
    event.preventDefault();
    let newItems = items;
    let index = items.indexOf(product);
    newItems.splice(index, 1);
    setItems([...newItems]);
  }

  const payment = () => {
    alert('Aquí se direccionaría a opciones de pago')
  }

  return(
    <div id='cart'>
      <div className='container'>
        <div id='cart2'>
          <div id='cart-products'>
              <span className='cart-products-header'>Producto</span> 
              <span className='cart-products-header'>Precio Unitario</span> 
              <span className='cart-products-header'>Cantidad</span> 
              <span className='cart-products-header' style={{paddingLeft: '12px'}}>TOTAL</span>          
            {list.map((item)=>{
              return <>
                <div className='cart-product margin-left'>
                  <img src={products[item[1]].src} alt={products[item[1]].name} className='cart-image'/>
                  <div>{item[0][0]} </div>
                </div>
                <div className='products-adjust' style={{marginLeft: '10px'}}>  <CurrencyFormat value={products[item[1]].price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </div>
                <div className='products-adjust'> 
                  <FontAwesomeIcon icon='plus' size='xs' onClick={((e) => increment(e, item[0][0]))} className='cart-btn'/> 
                  {item[0].length} 
                  <FontAwesomeIcon icon='minus' size='xs' onClick={((e) => decrement(e, item[0][0]))} className='cart-btn'/> 
                </div>
                <div className='products-adjust'> <CurrencyFormat value={item[0].length*products[item[1]].price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </div>
              </>
            })}
          </div>
          <div>
            <div id='summary'>
              <h1>Resumen</h1>
              {summary.map((product)=>{
                return <div className='products' key={product}> {product} </div>
              })}
              <h3>Total: <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </h3>
              <button onClick={payment} className='btn btn-success' style={{marginLeft:'40px'}}>Ir al Pago</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart