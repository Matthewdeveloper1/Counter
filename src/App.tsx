import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Settings from './counterSettings/counterSetings';
import { CounterBox } from './counterBox';



function App() {

  return (
    <header className='App-header'>
      <div className="App">
       <CounterBox/>
      </div>
    </header>
  );
}

export default App;
