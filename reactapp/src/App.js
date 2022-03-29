import React from 'react';
import { useState } from "react";
import './App.css';
//import InputSection from './InputSection'
//import OutputSection from './OutputSection';
import PPC from './PPC';
import Title from './Title';


function App() {
  const [Vo, setNumber1] = useState();
  const [d, setNumber2] = useState();
  const [x, setNumber3] = useState();
  const [S, setNumber4] = useState();
  const [V, setV] = useState();
  const [C, setC] = useState();

  function calculateV() {
    setV(Vo*x/d); //logic for V(potential)
  }

  const epislon = 8.8*10^-12
  function calculateC() {
    setC(epislon*S/d); //logic for C(apitance)
  }

  return (
    <div className="App">
      <Title/>
      
      <PPC/>

      <div className="variable-inputs">
        
        <div>
          <input
            type="number" className='box'
            value={Vo}
            onChange={(e) => setNumber1(+e.target.value)}
            placeholder = "Vo"
          />
        </div>
        
        <div>
          <input
            type="number" className='box'
            value={d}
            onChange={(e) => setNumber2(+e.target.value)}
            placeholder = 'd'
          />
        </div>
        <div>
          <input
            type="number" className='box'
            value={x}
            onChange={(e) => setNumber3(+e.target.value)}
            placeholder = 'x'
          />
        </div>
        <div>
          <input
            type="number" className='box'
            value={S}
            onChange={(e) => setNumber4(+e.target.value)}
            placeholder = 'S'
          />
        </div>
      </div>

      <button onClick={calculateV}>Potential V</button>
      <button onClick={calculateC}>Capacitance C</button>

      <h2>Potential V = {V}</h2>
      <h2>Capacitance C = {C}</h2>
    </div>
  );
}

export default App;

