import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../stylesheets/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){

    const [tareas, setTareas] =useState([]);

    const agregarTarea = tarea => {
        
    }
    /* Estamos creando una lista de Componentes*/
    return (
        <>
            <TareaFormulario />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                    <Tarea
                        texto={tarea.texto}
                        completada={tarea.completada}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;