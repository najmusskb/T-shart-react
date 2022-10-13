import React, { useContext } from 'react';
import { MoneyContrext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const   [money,setMoney ] =useContext(MoneyContrext)
    return (
        <div>
            <h4>Sisters</h4>
            <p><small>House:{house}</small></p>
            <p>money: {money}</p>
            <button onClick={()=>setMoney(money+1500)}>Add 1000</button>
            
        </div>
    );
};

export default Sister;