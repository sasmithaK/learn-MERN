import React from 'react';

class CounterClass extends React.Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state = {
            count: 0
        }
    }

    increment(){
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Counter = {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <hr></hr>
            </div>
        )
    }
}

export default CounterClass;