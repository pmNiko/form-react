import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Register from './components/Register';

function App() {
  return (
    <div className="contador-fluid">
        <Header/>
        <div className="row mt-5 justify-content-center ">
          <div className="col-4">
            <Register/>
          </div>
          <div className="col-4">
            usuarios
          </div>
        </div>
    </div>
  );
}

export default App;



