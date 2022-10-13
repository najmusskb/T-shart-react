import React from 'react';
import Cousin from '../Cousin/Cousin';
import Friend from '../Friend/Friend';

const Aunty = ({house}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House:{house}</small></p>
           <section className='flex'>
             <Cousin house={house}></Cousin>
             <Cousin house={house}></Cousin>
             <Friend></Friend>
             
           </section>
            
        </div>
    );
};

export default Aunty;