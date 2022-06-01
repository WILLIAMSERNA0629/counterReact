import './Counter.css';
import Button from '../molecules/Button/Button';
import {useState}from "react";


function Counter() {

  const [number,setNumber] = useState(0)

  const handleClick=()=>{
    setNumber(number+1) 
   
  }

  const minusClick =()=>{
    setNumber(number-1)
  }
  return (
    <div className="App">
      <p className='number'>{number}</p>
      <div className='styleButton'>
      <Button icon="-" iconstyle={"btn_minus"} onClick={minusClick}/>
      <Button icon="+" iconstyle={"btn_plus"} onClick={handleClick}/>
      </div>
    </div>
   );
}

export default Counter;
