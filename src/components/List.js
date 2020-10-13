import React from 'react';

const List = ({usuarios, removeUser}) => {

    const remove = (e, id) => {
        e.preventDefault();
        removeUser(id);
    }

    return (  
        <>
            <ul className="list-group" key={usuarios.length}>
                <li className="list-group-item active">
                    Usuarios Registrados
                </li>
                {usuarios.map(({nombre,apellido,mail,id}) => (
                    <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                        {nombre } {apellido} {mail}
                        <button className="btn btn-danger" 
                            onClick={(e) => {remove(e, id)}}>
                            <span role="img" aria-label="trash"> 
                                𝗫
                            </span>
                        </button>
                    </li>
                ))}
            </ul>                   
        </>
    );
}
 
export default List;