import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cartItems = props.courses;
    let total = 0;
    cartItems.map(x => {
        total = total + x.price
    });
    return (
            <div className="cart-box">
                <div>
                    <h5>Course Enrolled: {cartItems.length}</h5>
                    <h5>Total Price: $ {total.toFixed(2)}</h5>
                </div>
            </div>
    );
};

export default Cart;