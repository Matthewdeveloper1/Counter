import React, {useState} from "react"
import Counter from "./counter"
import Settings from "./counterSettings/counterSetings"

export const CounterBox = () => {
 const [maxValue, setMaxValue] = useState(5)
 const [minValue, setMinValue] = useState(0)
 const handleMaxValueChange = () => {
  setMaxValue(state => state +1)
 } 
 const handleMinValue = () => {
  setMinValue(minValue)
 }
 const maximumValue = () => {
  setMaxValue(maxValue)
}

const plusMax = () =>{ 
  setMaxValue(maxValue + 1)
}
const minMax = () =>{ 
  setMaxValue(maxValue - 1)
}

const plusStart = () =>{ 
  setMinValue(minValue + 1)
}
const minStart = () =>{ 
  setMinValue(minValue - 1)
}


  return (
    <div className="All">
      <Counter 
        maxValue={maxValue}
        minValue = {minValue}
        maximumValue = {maximumValue}
        handleMinValue = {handleMinValue}
      />
      <Settings 
        minValue = {minValue}
        minMax = {minMax}
        plusStart ={plusStart}
        minStart = {minStart}
        maxValue={maxValue}
        handleMinValue = {handleMinValue} 
        onMaxValueChange={handleMaxValueChange}
        plusMax = {plusMax}
      />
    </div>
  )
}