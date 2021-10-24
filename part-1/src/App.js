import logo from './logo.svg';
import './App.css';
import Mensaje from './mensaje.js'

const Description = () =>{
 return <p> esta es la descripcion</p>
}
function App() {
  return (
    <div className="App">
       <Mensaje color='blue' mensagge='hola mundo props' />
       <Mensaje color='red' mensagge='mundo' />
       <Mensaje color='blue' mensagge='props' />
       <Description />
    </div>
  );
}

export default App;
