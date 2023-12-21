import './App.css';
import fundaLogo from './img/funda-logo.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className='funda-logo-contenedor'>
        <img src={fundaLogo}
          className='funda-logo'
          alt='Logo Funda'/>
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
      
    </div>
  );
}

export default App;
