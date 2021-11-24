import react, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Counter(props) {

    const {increment,decrement,name,changeValue} = props;

    
    return (
        <div>
           
                <div className="container">
                    <button className="boxleft" onClick={decrement}>
                        -
                    </button>

                    <input type='number' className="boxcenter" value={name} onChange={changeValue}/>

                    <button className="boxright" onClick={increment}>
                        +
                    </button>
                </div>
        </div>
    );
    
}

