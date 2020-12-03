import React, {useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {CartContext} from './cartContext';



const Card = (props) => {
    const [amount, setAmount] = useState(0)
    const {src, name, number, price, unit} = props

    const increment = () => {
        setAmount(amount +1)
    }
    const decrement = () => {
        if (amount !== 0) {
            setAmount(amount - 1)
        }
    }
    
    const [items, setItems] = useContext(CartContext)

    const addToCart = event => {
        event.preventDefault();
        const newItems = []
        for (let i = 0; i < amount; i++) {
            newItems.push(name);
        }
        setItems([...items, ...newItems ]);
        setAmount(0)
    };





    return (
            <div className="col-sm-3">
                <div className="card text-center" style={{ width: "18rem" }}>
                    <img src={src} alt={name} key={number} className='card-img-top mx-auto image' />
                    <div className='card-body'>
                        <div> {unit}: ${price} </div>
                        <span onClick={increment}> <FontAwesomeIcon icon='plus'/> </span>
                        <input type="text" value={amount} className='card-input'/> 
                        <span onClick={decrement}> <FontAwesomeIcon icon='minus'/> </span>
                        <button className="btn btn-outline-success" onClick={addToCart}>Añadir al carro</button>
                    </div>
                </div>
            </div>
    )
}

export default Card 