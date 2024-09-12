import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    // useEffect runs after every render
    useEffect(() => {
    // This updates the document title after each render
    document.title = `You clicked ${count} times`;
    }, [count]); // Only runs when 'count' changes
    return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
    );
}

export default Example;