import './Pages.css';
import React from 'react';

import Counter from './components/Counter';

const CounterPage = () => {
    return (
        <>
            <h1>Counter Page</h1>
            <h3>Part 1 of Activity 2</h3>
            <div class='box'>
                <Counter />
            </div>
        </>
    )
}

export default CounterPage;