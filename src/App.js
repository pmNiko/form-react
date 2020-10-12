import React, {useState} from 'react';
import './App.css';
import "./components/Header/Header";
import "./components/Register"

function App() {
  // uso de use state
  // dentro de una funcion no uso use states
  // current state, modificador
  //  useState[0] -> valor de elemento
  //  useState[1] -> fn modificadora
  
  return (
    <div className="contador-fluid">
        {/* <Header/> */}
        <div className="row">
          <div className="col-6">
            <h2>todos el listado de los usuarios</h2>
          </div>
          <div className="col-6">
            <h2>todos los inputs</h2>
            {/* <Register/> */}
          </div>
        </div>
    </div>
  );
}

export default App;
