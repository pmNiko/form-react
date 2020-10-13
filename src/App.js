import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Register from './components/Register';
import List from './components/List';


function App() {
  // hook para manejo del listado de usuarios
  const [users, setUsers] = useState([]);

  // funcion para agregar un usuario desde el componente hijo
  // recibe como parametro el nuevo usuario registrado 
  // en Register.js y lo recibe a travez de una función 
  const addUser = (usuario) => {
    setUsers([...users, usuario])
  }
  // quitar un usuario de la colección
  const removeUser = (idUser) => {
    if (window.confirm("Esta seguro que desea eliminar el usuario?")){
      setUsers(users.filter(user => {
          return user.id !== idUser;
        })
      )
    }
  }

  // render del componente principal
  return (
    <div className="contador-fluid">
        <Header/>
        <div className="row mt-5 justify-content-center ">
          <div className="col-4">
            <Register addUser= {addUser}/>
          </div>
          
          <div className="col-4">
            <List removeUser={removeUser} usuarios={users} />
          </div>

        </div>
    </div>
  );
}

export default App;



