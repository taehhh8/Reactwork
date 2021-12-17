import React, { Component } from "react";
import './Counter.css';

class Counter extends Component {
    state = {
        number1: '',
        number2: '',
        number: 0,
    };
    result = (e) => {
        this.setState({
            number: parseInt(this.state.number1) + parseInt(this.state.number2),
        });
    };
    result1 = (e) => {
        this.setState({
            number: parseInt(this.state.number1) - parseInt(this.state.number2),
        });
    };
    result2 = (e) => {
        this.setState({
            number: parseInt(this.state.number1) * parseInt(this.state.number2),
        });
    };
    result3 = (e) => {
        this.setState({
            number: parseInt(this.state.number1) / parseInt(this.state.number2),
        });
    };
    numberChange1 = (e) => {
        this.setState({
            number1: e.target.value,
        });
    };
    numberChange2 = (e) => {
        this.setState({
            number2: e.target.value,
        });
    };
    reset = (e) => {
        this.setState({
            number: 0,
            number1: '',
            number2: ''
        });
    };
    render() {
        const { number1, number2, number } = this.state;
        return (
            <div className="container">
                <div className="calcu_result">
                    <h1>Calc Result : </h1>
                    <h1>{ number }</h1>
                </div>
                <hr />
                <div className="calcu">
                    <input
                        className="input1"
                        type="number"
                        name="calcu1"
                        placeholder="0"
                        onChange={this.numberChange1}
                        value={this.state.number1}
                    />
                <input
                    className="input2"
                    type="number"
                    name="calcu2"
                    placeholder="0"
                    onChange={this.numberChange2}
                    value={this.state.number2}
                />
                <button onClick={this.result}>Add</button>
                <button onClick={this.result1}>Sub</button>
                <button onClick={this.result2}>Mult</button>
                <button onClick={this.result3}>Divi</button>
                <button onClick={this.result}>reset</button>    
                </div>
            </div>
        );
    }
}

export default Counter;