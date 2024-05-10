/* eslint-disable react/prop-types */
import { useState } from "react";

const Buscador = ({ colaboradores }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [colaboradorEncontrado, setColaboradorEncontrado] = useState(null);

  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const colaborador = colaboradores.find((colaborador) =>
      Object.values(colaborador).some((value) =>
        value.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    );
    setColaboradorEncontrado(colaborador);
    setTerminoBusqueda("");
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={terminoBusqueda} onChange={handleChange} placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
      {colaboradorEncontrado && (
        <div>
          <h3>Colaborador Encontrado</h3>
          <p>Nombre: {colaboradorEncontrado.nombre}</p>
          <p>Correo: {colaboradorEncontrado.correo}</p>
          <p>Edad: {colaboradorEncontrado.edad}</p>
          <p>Cargo: {colaboradorEncontrado.cargo}</p>
          <p>Teléfono: {colaboradorEncontrado.telefono}</p>
        </div>
      )}
    </div>
  );
};

export default Buscador;
