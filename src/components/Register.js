import React, {useState} from 'react';
import Error from './Error';

// uso de npm -i short-id para crear ids cortos de cada elemento
// npm i uuid
const shortId = require('short-id');
// const {v4: uuid} = require('uuid');

const Register = ({addUser}) => {

    // hook para manejo de errores dentro del form
    const [error, setError] = useState(false);
    // hook para manejo de user
    const [user, setUser] = useState({
            // id: shortId.generate(),
            nombre: '',
            apellido: '',
            mail: ''
        }
    );

    // función para resetear el estado
    const resetState = () => {
        // const keys = Object.keys(ele);
        setUser({
            id: '',
            nombre: '',
            apellido: '',
            mail: ''
        });
        document.getElementById('form').reset();
    }

    // Manejador de inputs
    const handlerInput = (e) => {
        // destruct para recuperar el value y el name
        const { value, name } = e.target;

        // modifico el estado 
        // uso de spread para mantener el estado actual
        // modifico las propiedades dinamicamente con el valor del input
        setUser({...user, [name] : value})
    }

    // funciones para manejar eventos
    const register = (e) => {
        e.preventDefault();
        
        // validación de campos
        if (user.nombre.trim() === "" || 
            user.apellido.trim() === "" || 
            user.mail.trim() ===""
            ) {
                // cambio el estado del componente Error
                setError(true);
                // corte de ejecución
                return;            
            }
        
        // --- propagación del estado a la app.js ---//
        
        // desestructuro el objecto del hook user
        const {nombre, apellido, mail} = user;
        const userObject = {
            id : shortId.generate(),
            nombre,
            apellido,
            mail
        }
        addUser(userObject);

        // reseteo los campos del formulario
        resetState();
    }


    // Componente form
    return (  
        // contengo los componentes dentro de un Fragment
        <>
            <div className="card">
                <div className="card-header text-center">
                    <strong>Registrarse</strong> 
                </div>
                <div className="card-body">                    
                    <form id="form" className="mb-3" onSubmit={register}>
                        <div className="form-group">
                            <label htmlFor="nombre" className="ml-2"/> 
                                Nombre<span className="text-danger">*</span>
                            <input type="text" id="nombre"
                                className="form-control" 
                                placeholder="Nombre"
                                onChange={handlerInput}
                                value={user.name}
                                name= "nombre"
                            />                
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido" className="ml-2"/> 
                                Apellido<span className="text-danger">*</span>
                            <input type="text" id="apellido"
                                className="form-control" 
                                placeholder="Apellido"
                                onChange={handlerInput}
                                value={user.apellido}
                                name="apellido"
                            />                
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail" className="ml-2"/> 
                                Email<span className="text-danger">*</span>
                            <input type="email" id="mail"
                                className="form-control" 
                                placeholder="Email"
                                onChange={handlerInput}
                                value={user.mail}
                                name="mail"
                            />                
                        </div>

                        {/* boton submit */}
                        <button className="btn btn-outline-primary btn-block">
                            Guardar
                        </button>
                    </form>
                </div>
                {/* Si el estado del componente error esta en true se renderea */}
                {error? <Error message="Todos los campos son obligatorios"/> : null}
            </div>  
        </>
    );
}
 
export default Register;
