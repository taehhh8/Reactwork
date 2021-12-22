import React from "react";
import Hello from './Hello';
import './Jsxcss.css';

function Jsxcss() {
    let name = 'react';
    const myStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fonSize: 24, // default px
        padding: '1rem'
    }

    return (
        <>
            {/*== this is comment ==*/}
            /* == this is not comment == */ 
            <Hello />
            <div style = {myStyle}>{name}</div>
            <div className="pink-box"></div>
        </>
    );
}

//12/20강의

export default Jsxcss;