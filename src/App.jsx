/* eslint-disable no-unused-vars */
import  { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import './App.css'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador.nombre && nuevoColaborador.correo && nuevoColaborador.edad && nuevoColaborador.cargo && nuevoColaborador.telefono) {
      setColaboradores([...colaboradores, nuevoColaborador]);
      setAlerta("Colaborador agregado exitosamente");
    } else {
      setAlerta("Por favor, completa todos los campos del formulario.");
    }
  };

  const eliminarColaborador = (index) => {
    const nuevaLista = colaboradores.filter((colaborador, i) => i !== index);
    setColaboradores(nuevaLista);
    setAlerta("Colaborador eliminado exitosamente");
  };

  const buscarColaboradores = (terminoBusqueda) => {
    return colaboradores.filter((colaborador) =>
      Object.values(colaborador).some((value) =>
        value.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <h1>Administración de Colaboradores</h1>
      <Alert mensaje={alerta} />
      <Formulario agregarColaborador={agregarColaborador} />
      <Buscador colaboradores={colaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
    </div>
  );
};

export default App;
