import React, {useState} from 'react';

const Register = () => {

    // hook para manejo de errores dentro del form
    const [error, setError] = useState(false);
    // hook para manejo de user
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        mail: ''

    });

    // funciones para manejar eventos
    const register = (e) => {
        e.preventDefault();
        
        document.getElementById('form').reset();
    }

    const handlerInput = (e) => {
        // destruct para recuperar el value y el name
        const { value, name } = e.target;

        // modifico el estado 
        // uso de spreed para mantener el estado actual
        // modifico las propiedades dinamicamente con el valor del input
        setUser({...user, [name] : value})
    }

    return (  
        <form id="form" onSubmit={register}>
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

            <button className="btn btn-primary btn-block">
                Guardar <span role="img" aria-label="medal">🏅</span>
            </button>
        </form>
    );
}
 
export default Register;
