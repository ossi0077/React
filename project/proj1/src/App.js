import logo from './logo.svg';
import './App.css';
import Box1 from './component/Box1';
import {useState} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increase = ()=>{
    setCounter(counter + 1);
  }
  const decrease = ()=>{
    setCounter(counter - 1);
  }

  return (
    <div>
      <Box1 name="한국"/>
      <Box1 name="미국"/>
      <Box1 name="중국"/>

      <div>{counter}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default App;