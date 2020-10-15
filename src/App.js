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
  // modificar un usuario
  const editUser = (nombre,apellido,mail,userId) => {
    const userE = users.map( user => {
      if (user.id === userId) {
        user.nombre= nombre;
        user.apellido= apellido;
        user.mail= mail;
      }
      console.log(user);
      return user;
    });

    setUsers(userE);
  }

  // render del componente principal
  return (
    <div className="contador-fluid">
        <Header/>
        <div className="row mt-5 justify-content-center ">
          <div className="col-3">
            <Register addUser= {addUser}/>
          </div>
          
          <div className="col-7">
            <List 
              removeUser={removeUser} 
              editUser={editUser} 
              usuarios={users} 
            />
          </div>

        </div>
    </div>
  );
}

export default App;



