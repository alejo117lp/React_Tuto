import './App.css';
import ListaDeTareas from './Componentes/ListaDeTareas.js';
import fundaLogo from './img/funda-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='funda-logo-contenedor'>
        <img src={fundaLogo} className='funda-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
