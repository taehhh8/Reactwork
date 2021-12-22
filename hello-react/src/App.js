import logo from './logo.svg';
import './App.css';
import './InputExam';
// import InputExam from './InputExam';
// import Calculator from './Calculator';
// import UserList from './UserList';
// import UserManage from './UserManage';
// import Box from './Box';
import Reactcss from './Reactcss';
import CircleDiv from './CircleDiv';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>  
      {/* <h1> hello World </h1> */}
    </div>
    <div>
      <CircleDiv color = "blue" />
    </div>
    </>
  );
}

export default App;
