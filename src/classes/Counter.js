import React from 'react'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
       this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // handleIncrement =  () =>  {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    render() {
        return (
            <div className='counter'>
                <div>{this.state.counter}</div>
                <hr />
                <button type="button" onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
}

export default Counter;