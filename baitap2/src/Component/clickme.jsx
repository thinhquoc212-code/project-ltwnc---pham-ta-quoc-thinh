import { useState } from 'react';

function Clickme() {
    const [count, setCount] = useState(0);

    return (
        <div class = "clickme">
            <p>You clicked {count} times</p>
            <button 
                onClick={() => setCount(prev => prev + 1)}
            >
                Click me
            </button>
        </div>
    );
}

export default Clickme;