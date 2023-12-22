import React from "react";
import '../stylesheets/Boton.css';

function Boton(props){

    /* Aqui usamos una función flecha, tiene un parámetro al cual llamamos "valor", además, va  a
    retornar un Bool (T o F). Usamos "isNaN, el cual verifica si una cadena de caracteres NO es 
    un Número*/
    const esOpereador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
        /* Si todos son T retorna T, de lo contrario retorna F*/
    };

    return (
        <div 
        /* ${esOpereador(props.children) ? 'operador' : null -> Si es true se agregra la clase
        operador, de lo contrario es Null, además, {esOpereador(props.children) es una función que verifica
           si el valor de children es un opereador o no (+ - * /) */
         className={`boton-contenedor ${esOpereador(props.children) ? 'operador' : ''}`.trimEnd()}
         onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;