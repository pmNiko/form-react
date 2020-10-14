import React from 'react';

const List = ({usuarios, removeUser}) => {

    const remove = (e, id) => {
        e.preventDefault();
        removeUser(id);
    }

    return (  
        <>
            <table key={usuarios.length} 
                className="table table-striped shadow-lg ">
                <thead className="text-light text-center bg-secondary">
                    <tr>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">MAIL</th>
                    <th scope="col">ACCIONES</th>
                    </tr>
                </thead>
                <tbody >
                    {usuarios.map(({nombre,apellido,mail,id}) => (
                        <tr key={id} className="text-center">
                            <th scope="row">{nombre }</th>
                            <td>{apellido}</td>
                            <td>{mail}</td>
                            <td>
                                <button className="btn btn-danger mr-2" 
                                    onClick={(e) => {remove(e, id)}}>
                                    <span role="img" aria-label="trash"> 
                                        𝗫
                                    </span>
                                </button>
                                <button className="btn btn-warning" 
                                    onClick={(e) => {remove(e, id)}}>
                                    <span role="img" aria-label="trash"> 
                                        ✎
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>           
        </>
    );
}
 
export default List;