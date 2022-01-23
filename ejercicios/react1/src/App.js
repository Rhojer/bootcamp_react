import {useState} from 'react'
import './App.css';

function App() { const [counter, setCounter] = useState(0);

  const Counter = ({ number }) => {
    return <h1>{number}</h1>;
  };

  const handleClick = ({ opcion }) => {
    console.log({ opcion });
    return setCounter(counter + 1);
  };

  const handleClickReset = (event) => {
      console.log({event});
      setCounter(0);}
  const handleClickDown = ()=> setCounter(counter - 1);

  const isEvent = counter % 2 === 0;
  const menssage = isEvent ? "es par" : "es impar";
  return (
    <div>
      <p></p>
      <Counter number={counter} />
      <p>{menssage}</p>
      <button onClick={handleClickDown}>decrementar</button>
      <button onClick={handleClickReset}>reset</button>
      <button onClick={handleClick}>incrementar</button>
    </div>
  );
}

export default App;
