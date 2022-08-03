// custom functional component for input
import React from 'react';



const Button = ({ buttonName = 'Enter', onClick = null}) => {
    if(onClick) {
        return (
            <div>
                <button onClick={onClick} className='px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray'>{buttonName}</button>
            </div>
        );
    }
    return (
        <div>
            <button type='submit' className='px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray'>{buttonName}</button>
        </div>
    );
}

export default Button;

