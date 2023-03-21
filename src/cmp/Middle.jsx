import React from 'react'
import { useState } from 'react'
import Cls1 from './Cls1'
import Fun1 from './Fun1'

const Middle = () => {
    // const [n, setn] = useState(false)
    // const [s, sets] = useState(false)

    const [count, setCount] = useState(false);
    const [count2, setCount2] = useState(false);

    // const show = () => { if (n) { setn(false) } else { setn(true) } }
    // const cshow = () => { s ? sets(false) : sets(true) }

    const HandleFunc = () => {
        setCount(!count);
    };

    const HandleClass = () => {
        setCount2(!count2);
    };

    return (
        <div className='container'>
            {/* <button className='btn1' onClick={show}>To see styling in Functional component</button>
            <button className='btn2' onClick={cshow}>To see styling in Class component</button>
            <div>{n && <Fun1 />}</div>
            <div>{s && <Cls1 />}</div> */}

            <button className='btn1' onClick={HandleFunc}>To see styling in Functional component</button>
            <button className='btn2' onClick={HandleClass}>To see styling in Class component</button>
            {count ? <Fun1 /> : null}
            {count2 ? <Cls1 /> : null}
        </div>

    )
}

export default Middle