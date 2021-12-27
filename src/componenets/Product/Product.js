import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p><small>${price}</small></p>
                <br />
                <p><small>only {stock} left in stock - Order soon</small></p>
                <button className='main-button' onClick={() => props.handleButtonEvent(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div >
    );
};

export default Product;