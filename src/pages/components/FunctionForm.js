import React, { useState } from 'react';

function Form() {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault(); //Will not reload page when submitting
    alert(`Form submitted with value: ${inputValue}`);
    };
    return (
        <div class='center'>
            <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) =>
            setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    
    );
    }

    export default Form;