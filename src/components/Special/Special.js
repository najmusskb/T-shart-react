import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    // use context api 
    const [house,setHouse] =useContext(RingContext)
    return (
        <div>
            <h4>special</h4>
            <p><small> gift: {house}</small></p>
            <button onClick={()=> setHouse(house+1)}>increase</button>
        </div>
    );
};

export default Special;