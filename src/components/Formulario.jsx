/* eslint-disable react/prop-types */
import { useState } from "react";

const Formulario = ({ agregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarColaborador(nuevoColaborador);
    setNuevoColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: ""
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} placeholder="Nombre" />
        <input type="email" name="correo" value={nuevoColaborador.correo} onChange={handleChange} placeholder="Correo" />
        <input type="number" name="edad" value={nuevoColaborador.edad} onChange={handleChange} placeholder="Edad" />
        <input type="text" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} placeholder="Cargo" />
        <input type="tel" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange} placeholder="Teléfono" />
        <button type="submit">Agregar Colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;
