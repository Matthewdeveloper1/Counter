import React, { FC, useState } from "react";

type counterPropsType ={
  handleMinValue: () => void
  maxValue: number
  minValue: number
  maximumValue: ()=> void
}

const Counter:FC<counterPropsType> = (props) => {
  const [counter, setCounter] = useState(0)
  const Plus = () => {
    setCounter(counter + 1)
  }

  const disabled = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    counter === props.maxValue
  }

  return (
  <div className="counter-all">
    <div className='Counter'>
      {counter}
    </div>
    <div className="btn">
      <button className="btnPlus" onClick={() =>{Plus()}}>+</button>
      <button className="btnReset" onClick={() => setCounter(props.minValue)} > reset</button>
    </div>
  </div>
  )
}
//disabled={isMaxCounter}
//disabled={isLowCounter}
export default Counter;