import React from "react";

function Car() {
    const color = "red"
    return <h1>This is my {color} car!!!</h1>
}

// class Car extends React.Component {
//     constructor() {
//         super();
//         this.state = {color: "red"};
//     }
//     render() {
//         // return <h1>This is my {this.state.color} car!!!!</h1>
//         return <h1>This is my {this.props.color} car!!!!</h1>
//     }
// }

export default Car;