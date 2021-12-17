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
import Football from './Football';
import Goal from './Goal';
import Fate from './Fate';
import HordForm from './HordForm'
import 

const characters = ['Siro', 'Saber', 'Archer', 'Tosaka Lyn', 'Verserker'];

// import CarFun from './CarFun'
// import ContainerFun from './ContainerFun'
// import GundamFunc from './GundamFun'
// import HeadercompFunc from './HeadercompFun'

// class Gundam extends React.Component {
//   constructor(props) {
//       super(props);
//   }

ReactDOM.render(
  <React.StrictMode>
    <HordForm />
  </React.StrictMode>,
  document.getElementById('root')
)
// XML 


// ReactDOM.render(
//   <React.StrictMode>
//     <Goal isGoal={false} />
//   </React.StrictMode>,
//   document.getElementById('root')

// )
//사막연산자 사용가능

// ReactDOM.render(
//   <React.StrictMode>
//     <Fate characters={characters} />
//   </React.StrictMode>,
//   document.getElementById('root')

// )

// ReactDOM.render(
//   <React.StrictMode>
//     <Goal isGoal={true} />
//   </React.StrictMode>,
//   document.getElementById('root')

// )


// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam model="ZGMF-X10A" />
//   </React.StrictMode>,
//   document.getElementById('root')

// )


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