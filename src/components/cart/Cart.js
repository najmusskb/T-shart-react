import React from 'react';

const Cart = ({cart,removeCartHandler}) => {

    let messege;
    if(cart.length===0){
        messege= <p> Please buy at least One Items !!! </p>
    }

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

            
            {
                messege
            }

        </div>
    );
};

export default Cart;


/* 

Conditional Rndaring------------------------------------------

1.use Elements (if else)



*/