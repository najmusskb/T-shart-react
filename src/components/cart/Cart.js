import React from 'react';

const Cart = ({cart,removeCartHandler}) => {
    
    console.log(cart)
    return (
        <div>
            <h3><u>Order Now</u></h3>
            <h5>Order QuantityL: {cart.length}</h5>
            {
                cart.map(tshart=><p key={cart.id}>

                    {tshart.name}


                    <button onClick={()=>removeCartHandler(tshart)}>x</button>

                </p>)
            }

        </div>
    );
};

export default Cart;