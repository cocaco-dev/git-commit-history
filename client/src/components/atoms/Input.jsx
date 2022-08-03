// custom functional component for input
import React from 'react';



const Input = ({ name, type = 'text', placeHolder = '', labelText = '', customCss = '', onChange, value, isRequired = true}) => {
    return (
        <div className={customCss}>
            {labelText && <label className="block" for={name}>{labelText}</label>}
            <input required={isRequired} onChange={onChange} value={value} name={name} className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black' placeholder={placeHolder} type={type} />
        </div>
    );
}

export default Input;

