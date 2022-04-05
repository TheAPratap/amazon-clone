import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{cart, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout__left">
            <img 
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg" 
                alt="ad_img"
            />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Cart
                </h2>
                
                {cart.map(item =>(
                    <CheckoutProduct 
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  );
}

export default Checkout