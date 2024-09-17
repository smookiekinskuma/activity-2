import './Pages.css';
import React from 'react';

import ControlledInput from './components/ChangeName';
import Event  from './components/EventHandling';
import Form  from './components/FunctionForm';
import Example from './components/UseEffect';

const Other = () => {
    return (
        <>
        <h1>Discussion</h1>
            <div class='box'>
                <ControlledInput />
            </div>
        
            <div class='box'>
                <Event />
            </div>
        
            <div class='box'>
                <Form />
            </div>
        
            <div class='box'>
                <Example />
            </div>        
        </>        
    )

}

export default Other;