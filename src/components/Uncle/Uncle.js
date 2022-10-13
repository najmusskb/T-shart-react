import React, { useContext } from 'react';
import { MoneyContrext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money,setMoney]=useContext(MoneyContrext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>House:{house}</small></p>
            <p>Money:{money}</p> 
            <button  onClick={()=>setMoney(money+10)}></button>  
        </div>
    );
};

export default Uncle;