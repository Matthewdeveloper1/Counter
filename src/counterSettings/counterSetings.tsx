import React, { FC, MouseEventHandler, useState } from "react";

type settingsPropsType = {
  maxValue: any
  plusMax: () => void
  minMax: MouseEventHandler<HTMLButtonElement>
  minValue: number
  plusStart: () => void
  minStart: () => void
  handleMinValue: () => void
  onMaxValueChange: () => void
}
const Settings: FC<settingsPropsType> = (props) => {
  // const [settings, setSettings] = useState(5)



  return (
    <div className="Settings-border">
      <div className="apply-btn">
        <button>set</button>
      </div>
      <div className='counter-settings'>
        <div>
          max value: {props.maxValue}
          <button onClick={props.plusMax}>+</button>
          <button onClick={props.minMax}>-</button>
        </div>

        <div className={props.minValue > -1 ? 'set-btn' : 'warning'} >
          start value: {props.minValue}
          <button onClick={props.plusStart}>+</button>
          <button onClick={props.minStart} >-</button>
        </div>
      </div>
    </div>
  )
}

export default Settings;