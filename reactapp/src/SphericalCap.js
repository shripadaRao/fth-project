import React from 'react';
import { useState } from "react";
import './App.css';


function SphCap() {
  const [Vo, setNumber1] = useState();
  const [r, setNumber2] = useState();
  const [b, setNumber3] = useState();
  const [a, setNumber4] = useState();
  const [V, setV] = useState();
  const [C, setC] = useState();

  const kab = (-1*(1/a)- (1/b));

  function calculateV() {
    setV(Vo/r*kab - Vo/b*kab ); //logic for V(potential)
  }

  const epsilon = 8.8*10**-12
  const pi = 3.14
  function calculateC() {
    setC(4*pi*epsilon/kab); //logic for C(apitance)
  }

  return (
    <div className="App2">
      
      
      <div>
        <h2> Spherical Capacitor</h2>
    </div>

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
            value={r}
            onChange={(e) => setNumber2(+e.target.value)}
            placeholder = 'r'
          />
        </div>
        <div>
          <input
            type="number" className='box'
            value={b}
            onChange={(e) => setNumber3(+e.target.value)}
            placeholder = 'b'
          />
        </div>
        <div>
          <input
            type="number" className='box'
            value={a}
            onChange={(e) => setNumber4(+e.target.value)}
            placeholder = 'a'
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

export default SphCap;

