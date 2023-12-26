import React from "react";
import '../stylesheets/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea( {id,texto, completada,completarTarea, eliminarTarea} ){
    return(

        /*Div con dos contenedores, uno para el texto de la tarea, otro para el icono de eliminar
        Al hacer clic en el primero se llama a la funcion completar tarea (ep id especifica
            cual tarea). En el segundo se llama a la función eliminar tarea y se usa el paquete
            de iconos de React, en este caso  AiOutlineCloseCircle, allí podría ir también
            la <img /> */
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto"
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle  className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;