import React from 'react';

const List = ({usuarios, removeUser, editUser}) => {

    const remove = (e, id) => {
        e.preventDefault();
        removeUser(id);
    }

    const edit = (e, nombre,apellido,mail,id) => {
        e.preventDefault();
        let form = `
            <tr id="tr-edit" className="text-center">
                <td><input type="text" placeholder="${nombre}" id="nameUser" value= "${nombre}"></input></td>
                <td><input type="text" placeholder="${apellido}" id="surnameUser" value="${apellido}"></input></td>
                <td><input type="mail" placeholder="${mail}" id="mailUser" value="${mail}"></input></td>
                <td>
                    <button id="ok${id}" className="mr-2" style="border: none;">
                        <span role="img" aria-label="trash"> 
                            ✅
                        </span>
                    </button>
                    <button id="${nombre}" className="mr-2" style="border: none;">
                        <span role="img" aria-label="trash"> 
                            ⬅️
                        </span>
                    </button>
                </td>
            </tr>
        `;

        document.getElementById(id).innerHTML = form;
        // document.getElementById(id).style.display = "none";
        // document.getElementById("tr-edit").style.display = "block";
        document.getElementById(id).addEventListener("click", function(e) {
            e.preventDefault();
            update(id);
          });
        document.getElementById(nombre).addEventListener("click", function(e) {
            e.preventDefault();
            alert('cancel');
        });
    }

    

    const update = (id) => {
        let name = document.getElementById("nameUser").value;
        let surname = document.getElementById("surnameUser").value;
        let mail = document.getElementById("mailUser").value;
        console.log(id, name, surname, mail);
        editUser(name, surname, mail, id);
    }

    return (  
        <>
            <table key={usuarios.length} 
                className="table table-striped shadow-sm ">
                <thead className="text-light text-center bg-secondary">
                    <tr>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">MAIL</th>
                    <th scope="col">ACCIONES</th>
                    </tr>
                </thead>
                <tbody id="user-table">
                    {usuarios.map(({nombre,apellido,mail,id}) => (
                        <tr key={id} id={id} className="text-center">
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
                                    onClick={(e) => {edit(e, nombre,apellido,mail,id)}}>
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