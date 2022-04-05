import React from 'react';
import { useState } from "react";
import './App.css';
//import SphCap from './SphericalCap';

import Title from './Title';


function App() {
  const [Vo, setNumber1] = useState();
  const [d, setNumber2] = useState();
  const [x, setNumber3] = useState();
  const [S, setNumber4] = useState();
  const [V, setV] = useState();
  const [C, setC] = useState();

 function calculateV() {
    setV(Vo*x/d); //formula for V(potential)
  }

  const epsilon = 8.8*10**-12
  function calculateC() {
    setC(epsilon*S/d); //formula for C(apitance)
  } 

  return (
    <div className="App1">
      <Title/>
      <br></br>
      <br></br>
      
      <h2> Parallel Plate Capacitor</h2>
      <h4> Assumptions : One of the plate is at origin with potential 0 and the other at distance 'd', Free Space k=1</h4>
      <h4> Potential varies with x axis</h4>
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

      <h3>Potential V = {V}</h3>
      <h3>Capacitance C = {C}</h3>
    </div>
  );
}

export default App;



