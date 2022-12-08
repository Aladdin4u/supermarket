import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import product from '../data/Product'
import Button from './Button';

const List = (props) => {
    return(
            <div className='ui-product'>
                <div className='ui-img'>
                    <img src={props.img} alt="" />
                </div>
                <div className='ui-text'>
                    <p><span className='ui-bold'>{props.name}</span> <br/>
                        <span>{props.detail}</span>
                    </p>
                </div>
                <div className="ui-btn">
                    <Link to="/products" >
                        {props.price}
                    </Link>      
                </div>
            </div>
        
    )
}

const Product = () => {
    const [items, setItems] = useState(product[0].data)
    console.log(items)
    const productElement = items.map(item => (
        <List 
            key={item.id}
            name={item.name}
            detail={item.details}
            price={item.price}
        />
    ))
    return ( 
        <section >
            <h1>Products</h1>
            <p>Take a look at our products</p>

            <div className='ui-product-list'>
                {productElement}
            </div>
        </section>
     );
}
 
export default Product;