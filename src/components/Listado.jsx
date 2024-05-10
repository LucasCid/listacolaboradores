/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <div>
      <h2>Listado de Colaboradores</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador, index) => (
            <tr key={index}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>
                <button onClick={() => eliminarColaborador(index)} className="btn btn-danger">Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado;

