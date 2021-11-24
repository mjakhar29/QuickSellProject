import react, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function Loader() {
    return (
        <div>
            <div className="uppertext">
                <div className="loader"></div>
                <div className="text">Saving counter value</div>
                </div>
        </div>
    )
}
