import React, { useState } from 'react';

const IncDec =() =>{
    const [num, setNum] = useState(0);
    const IncF = () =>{
        setNum(num + 1);
    };
    const DecF = () =>{
        setNum(num -1);
    };
    return (
        <div className='main_div'>
            <div className='center_div'>
                <h1>{num}</h1>
                <div className='btn_div'>
                    <button onClick={IncF}>Increment</button>
                    <button onClick={DecF}>Decrement</button>
                </div>
            </div>
        </div>
    );
}

export default IncDec;