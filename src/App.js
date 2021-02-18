import logo from './assets/img/logo.svg';
import './assets/css/App.css';
//importar componentes
import MiComponente from "./components/MiComponente";
import ComponenteReceta from "./components/ComponenteReceta";


//Esto es un componenete

function HolaMundo(nombre, año){

  var presentacion = (
      <div>
          <h2>Hola, Soy {nombre}</h2>
          <h3>Año {año}</h3>
      </div>
  )


  return presentacion;
}

function App() {

  var nombre = "Diego Sobarzo";

  return (
      //Bloque de Codigo JSX mescla HTML y JS
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {
          alert("Hola Mundo con ReactJs!!")
        }
        {HolaMundo(nombre, 2021)}
        <section className="componentes">

          <MiComponente />

         <ComponenteReceta />

        </section>
      </header>



    </div>
  );
}

export default App;
