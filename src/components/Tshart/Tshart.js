import React from 'react';
import './Tshart.css'
const Tshart = ({ tshart,handletoCart}) => {
    // console.log("TShirt ________", tshart);
    const { picture,name,price } = tshart;
    return (
        
        <div className='imgLoder'>
            <img src={picture} slt="shirt image" />
            <h3>{name}</h3>
            <h3>Price:  {price}</h3>
            <button onClick={()=>handletoCart(tshart)}>Buy Now</button>
        </div>
    );
};

export default Tshart;