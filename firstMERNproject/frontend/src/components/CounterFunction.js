import React, {useState} from "react";

function CounterFunction(){
    
    let [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);   
    }

    return (
        <div>
            <h1>Function Component</h1>
            <h1>Counter = {count}</h1>
            <button onClick = {e => increment()}>Increment</button>
        </div>
    )
}

export default CounterFunction;