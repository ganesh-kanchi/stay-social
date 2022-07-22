import React from 'react';
import "./Loader.css";

export const Loader = () => {
    return (
        <div className='loader'>
        {/* <svg src="assets/loading_static.svg" alt="loader" /> */}
            <img src="../../assets/loading_static.svg" alt="loader" />
        </div>
    )
}