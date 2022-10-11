import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import Tshart from '../Tshart/Tshart';
import './Home.css'

const Home = () => {
    const tsharts = useLoaderData();
    console.log(tsharts);
    return (
        <div className='Home'>
           <div className='t-shart-container'>

           {tsharts.length}
            {
                tsharts?.map(tshart => (<Tshart
                    key={tshart.id}
                    tshart={tshart}></Tshart>)
                )
                

            }
           </div>
           <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;