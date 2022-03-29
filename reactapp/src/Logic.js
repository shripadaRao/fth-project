import { useState } from "react";
import ReactDOM from "react-dom";

function Appo() {
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
      <h1>Calc C and V</h1>

      <div className="variable-inputs">
        <input
          type="number"
          value={Vo}
          onChange={(e) => setNumber1(+e.target.value)}
          
        />
        <input
          type="number"
          value={d}
          onChange={(e) => setNumber2(+e.target.value)}
          
        />
        <input
          type="number"
          value={x}
          onChange={(e) => setNumber3(+e.target.value)}
          
        />
        <input
          type="number"
          value={S}
          onChange={(e) => setNumber4(+e.target.value)}
          
        />
      </div>

      <button onClick={calculateV}>Potential V</button>
      <button onClick={calculateC}>Capacitance C</button>

      <h2>{V}</h2>
      <h2>{C}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Appo />, rootElement);
