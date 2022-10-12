import React from 'react';

const Cart = ({cart,removeCartHandler}) => {

    // nice part for randaring condition 
    let messege;
    if(cart.length===0){
        messege= <p> Please buy at least One Items !!! </p>
    }
    else if(cart.length===1){
        messege=<div>
            <h3>Give Me One </h3>
            <h3>Give Me Anouther One </h3>
            <p>Give Me Both </p>
        </div>
    }
    else{
        messege=<p>Thanks For Buying</p>
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

1.use Elements  in a variable and use  (if else and else if )



*/