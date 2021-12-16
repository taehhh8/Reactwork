import React, { useState } from "react";

class Gundam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            camp: "Earth",
            model: "X109",
            engine: "Atomic",
            pilot: "Yamato",
            year: "Cosmic 70"
            
        };
    }
    // getDerivedStateFromprops() {} //이러 상속ㅇ인데 뭔지 모르겠음
    changeModel = () => {
        this.setState({model: "X109 Justice"});
    }

    render() {
        return (
        <div>
            <h1>{this.state.model} </h1>
            <h2>The camp is {this.state.camp}</h2>
            <h2>The engine is {this.state.engine}</h2>
            <h2>The pilot Name is {this.state.pilot}</h2>
            <h2>{this.state.year} Space Centry</h2>
            <h2>The Cargo is {this.props.cargo} </h2>
            <button type="button" onClick={this.changeModel}>Change model</button>
        </div> 
        )       
    }
}

export default Gundam;