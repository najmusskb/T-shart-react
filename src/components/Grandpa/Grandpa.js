import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

// how use react Context  (bassically react context is
//  a mobile antena,,,,as he provided the color aor theme )

export const RingContext=React.createContext('Matir ring');
export  const MoneyContrext=React.createContext(555);

const Grandpa = () => {
    // const house =7;
    // const ring='daymond ring'
    // onno vabeo daynamic vabe context api kora jay example 
    const [house,setHouse]=useState(1);
    // anouther example without driling with context api
    const [money,setMoney]=useState(555)


    return (
       <RingContext.Provider value={[house,setHouse]}>
         <MoneyContrext.Provider value={[money,setMoney]}>
         <div className='grandpa'>
            <h2>Grand Pa</h2>
            <section className='flex'>
                <Father house={house} ></Father>
                <Uncle house={house}></Uncle>
                <Aunty  house={house}></Aunty>
            </section>
            
        </div>
         </MoneyContrext.Provider>
       </RingContext.Provider>
    );
};

export default Grandpa;