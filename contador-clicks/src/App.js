import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoFunda from './img/funda-logo.png';


function App() {

  const manejarClick = () => {
    console.log('click');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
         numClicks={'5'}/>
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
