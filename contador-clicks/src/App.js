import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoFunda from './img/funda-logo.png';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => { /* Arrow funtion */
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='funda-logo-contenedor'>
        <img className='funda-logo'
        src={logoFunda} 
        alt='Logo de funda'/>
      </div>
      <div className='contenedor-principal'>
        <Contador 
         numClicks={numClicks}/>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>
      
    </div>
  );
}

export default App;
