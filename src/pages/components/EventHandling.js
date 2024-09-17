//import React, { useState } from 'react';

function Event() {
    <p>Event Handling</p>
    const handleClick = () => {
    alert('Button was clicked!');
    };
    return (
        <div class='center'>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    
    );
    }

export default Event;

