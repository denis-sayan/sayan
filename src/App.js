import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calc from './components/calc/Calc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Калькулятор
      </header>
      <Calc />
    </div>
  );
}

export default App;
