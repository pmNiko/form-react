import React, {useState} from 'react';

const Register = () => {
    const [error, setError] = useState(false);
    const [user, setUser] = useState({
        nombre: '',
        apellido: '',
        mail: ''
    });

    handlerInput = (e) =>{
        const {value: input} = e.target;
    }

    const register = () => {
        console.log("bla");
    }

    return ( 
        <form onSubmit={register}>
            <div className="form-group">
                <input type="text" onChange={handlerInput}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
                registro
            </button>
        </form>

    );
}
 
export default Register;