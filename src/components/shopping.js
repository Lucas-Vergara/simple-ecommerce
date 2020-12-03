import Card from './card';
import products from './products'
import React from 'react'
import { Container } from 'react-bootstrap';


const Shopping = () => {
    return(
        <div id='shop'>
            <div className='container'>
                <div className='row'>
                    {products.map((image) => (
                        <Card src={image.src} name={image.name} key={image.name} unit={image.unit} price={image.price} />
                    ))}
                </div>
            </div>
        </div>


    )
}

export default Shopping