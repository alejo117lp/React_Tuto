import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../stylesheets/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){

    const [tareas, setTareas] =useState([]);

    /* Se recibe la tarea como argumento*/
    const agregarTarea = tarea => {
        if(tarea.texto.trim()){
            /*Se verifica si hay espacios vacíos*/
            tarea.texto = tarea.texto.trim();
            /* Para que la tarea quede al inicio del arreglo*/
            const tareasActualizadas = [tarea, ...tareas];
            /*Agregamos las tareas nuevas al estado*/
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea=>tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    }
    /* Estamos creando una lista de Componentes*/
    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                    <Tarea
                    /*Key: atributo que permite que React identifique nuestros elementos en una lista*/
                        key={tarea.id} /*Se debe incluir id*/
                        id = {tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea={eliminarTarea}
                        completarTarea={completarTarea}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;