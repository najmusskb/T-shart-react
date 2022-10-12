import React from 'react';
import './Cart.css'
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
            <h3 className={cart.length===2 ? `orange`: `purple`}><u>Order Sumarry </u></h3>
            <h5 className={`bold ${cart.length===2 ? `blue`: `yellow` }`}>Order QuantityL: {cart.length}</h5>
            {
                cart.map(tshart=><p key={cart.id}>

                    {tshart.name}


                    <button onClick={()=>removeCartHandler(tshart)}>x</button>

                </p>)
            }

            {
                messege
            }

            { cart.length === 3 ? <p>tin jon ke gift  diba  </p> : <p>ok kino kino </p>}

            <p>And Operator</p>
            {
                cart.length===2 && <h2>Double Items</h2>
            }
            <p>Or  Operator</p>
            {
            cart.length === 4 || <h2>4 ta item na !!!</h2>
            }

        </div>
    );
};

export default Cart;


/* 
Conditional Rndaring------------------------------------------
1.use Elements  in a variable and use  (if else and else if )
2.Using Ternary Operator condition ? trule : false ()
3.&& Operator is true i want to display something
4.|| if condition is false i want to display something 
*/