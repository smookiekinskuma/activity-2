import React, { useState } from 'react';

function ControlledInput() {
    const [name, setName] = useState('');
    return (
        <>
        <p>Controlled Input</p>
            <div class='center'>
            <label>Name: <input type="text" value={name} onChange={(e) =>
            setName(e.target.value)} /></label>
            </div>
        <p>Your name is: {name}</p>            
        </>        
    );
}

export default ControlledInput;