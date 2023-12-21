import React from "react";

function Boton(props){
    return (
        <div 
         className={`boton-contenedor`}>
            {props.children}
        </div>
    );
}

export default Boton;