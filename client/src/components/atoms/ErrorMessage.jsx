// custom functional component for input
import React from 'react';



const ErrorMessage = ({ message = ''}) => {
    if (message) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                <strong className="font-bold">{message}</strong>
            </div>)
    }
}

export default ErrorMessage;

