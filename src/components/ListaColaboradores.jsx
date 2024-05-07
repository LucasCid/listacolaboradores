import { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";
import "../App.css";

const Colaboradores = () => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
    });
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);

    const enviarFormulario = (e) => {
        e.preventDefault();

        setListaColaboradores([...listaColaboradores, nuevoColaborador]);
        setNuevoColaborador({
            id: "",
            nombre: "",
            correo: "",
            edad: "",
            cargo: "",
            telefono: ""
        });
    };

    const capturaInput = (e) => {
        const { name, value } = e.target;
        setNuevoColaborador((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // const completarColaborador = (tarea) => {
    //     const nuevosColaboradores = listaColaboradores.map((colab) => {
    //         if (colab.nombre === tarea.nombre) {
    //             return { ...colab, completada: true };
    //         }
    //         return colab;
    //     });
    //     setListaColaboradores(nuevosColaboradores);
    // };

    const eliminarColaborador = (colaborador) => {
        const listaFiltrada = listaColaboradores.filter((colab) => colab.nombre !== colaborador.nombre);
        setListaColaboradores(listaFiltrada);
    };

    return (
        <div className="all">
            <h1>Colaboradores</h1>
            <form onSubmit={enviarFormulario}>
                <input name="nombre" value={nuevoColaborador.nombre} onChange={capturaInput} placeholder="Nombre" />
                <input name="correo" value={nuevoColaborador.correo} onChange={capturaInput} placeholder="Correo" />
                <input name="edad" value={nuevoColaborador.edad} onChange={capturaInput} placeholder="Edad" />
                <input name="cargo" value={nuevoColaborador.cargo} onChange={capturaInput} placeholder="Cargo" />
                <input name="telefono" value={nuevoColaborador.telefono} onChange={capturaInput} placeholder="Teléfono" />
                <button className="btn btn-primary">Agregar Colaborador</button>
            </form>
            <table className="table mt-4">
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
                    {listaColaboradores.map((colaborador) => (
                        <tr key={colaborador.nombre}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                {/* {!colaborador.completada && (
                                    <button onClick={() => completarColaborador(colaborador)} className="btn btn-success">
                                        Completar
                                    </button>
                                )} */}
                                <button onClick={() => eliminarColaborador(colaborador)} className="btn btn-danger ms-2">
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Colaboradores;
