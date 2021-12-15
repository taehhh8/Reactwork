import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './Car';
import Gundam from './Gundam';
import Archangel from './Archangel';
import Headercomp from './Headercomp';
import Container from './Container';
import reportWebVitals from './reportWebVitals';

// class Gundam extends React.Component {
//   constructor(props) {
//       super(props);
//   }


ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('header')

)


// ReactDOM.render(
//   <React.StrictMode>
//     <Headercomp newTitle="new title!!!!"/>
//   </React.StrictMode>,
//   // <Car />,
//   document.getElementById('header')

// )
//   render() {
//       return <h1>This Gundam is {this.props.model} !!!! </h1>
//   }
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Car color="red"/>
//   </React.StrictMode>,
//   // <Car />,
//   document.getElementById('root')

// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam model="Freedom"/>
//   </React.StrictMode>,
//   // <Car />,
//   document.getElementById('root')

// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam cargo="Acrhangel"/>
//   </React.StrictMode>,
//   // <Car />,
//   document.getElementById('root')

// )


// const x = 9;
// const myelement = <h1>{(x) < 10 ? "hello" : "hello world!!!"} </h1>
// ReactDOM.render(myelement, document.getElementById("root"));