import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import Tshart from '../Tshart/Tshart';
import './Home.css';
const Home = () => {
    const tsharts = useLoaderData();
    const [cart,setCart] =useState([])


    const handletoCart=tshart=>{
        const Exists =cart.find(ts=>ts.id===tshart.id)
        if(Exists){
            alert('t-shart is also addeded')
        }
        else{
            const newcart= [...cart,tshart];
            setCart(newcart);
            // alert('SuccessFully Addeded')
        }
        // console.log(tshart)
    }



    
const removeCartHandler=tshart=>{
    const remaining=cart.filter(ts=>ts.id !== tshart.id);
    setCart(remaining)
    // console.log(tshart)
}
    return (
        
        <div className='Home'>
           <div className='t-shart-container'>

            {
                tsharts?.map(tshart => (<Tshart
                    key={tshart.id}
                    tshart={tshart}
                    handletoCart={handletoCart}
                    ></Tshart>)
                )
            }
           </div>
           <div className='cart-container'>
                <Cart cart={cart}
                removeCartHandler={removeCartHandler}
                
                ></Cart>
            </div>
        </div>
    );
};
export default Home;