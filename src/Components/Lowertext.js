import react, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Lowertext(props) {

    return (
        <div>
             <div className="lowertext">
                 Counter value : {props.name} 
             </div>
        </div>
    )

}
