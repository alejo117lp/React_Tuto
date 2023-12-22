import React from "react";
import '../stylesheets/Pantalla.css';

const Pantalla = ({ input }) => (
/* ({ input }) = Sintaxis de desestrucutración para los props */
    <div className='input'>
        {input}
    </div>
);

export default Pantalla;

/* Componente como función Flecha:
Definimos el componente como una constante (const en lugar de Function) para que
No se reasigne la palabra Pantalla. Luego se define el prop con sintaxis de desestructuración:
({ input }). Seguidamente, la expresión  => indica a React que retorne el valor de la 
estructura que sigue, en este caso, la estructura del componente.
El div tiene una clase input, y allí adentro vamos a reemplazar el valor del prop.
*/