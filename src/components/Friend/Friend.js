import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house,seHouse]=useContext(RingContext)
    return (
        <div>
            <h3> friend</h3>
            <p><small>{house}</small></p>
            <button onClick={()=>seHouse(house -1)}>Decrease</button>
        </div>
    );
};

export default Friend;