import {useState} from 'react'
import './App.css';

function App() { const [counter, setCounter] = useState(0);
  const ListOfClick = ({click}) => {
    return <p>{click}</p>;
  };
  
  
  const WarningNotClicks = ()=><p>no hay ningun click</p>
  const [counters, setCounters] = useState({
    right: 0,
    left: 0,
    menssage: "mensaje de estado"
  });

  const [click, setClick] = useState([]);

  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1
    });
    setClick((prevClick) => [...prevClick, "L"]);
  };
  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });
    setClick((prevClick) => [...prevClick, "R"]);
  };

  const handleClickReset = () => {
    setCounters({
      ...counters,
      left: 0,
      right: 0
    });
    setClick([]);
  };

  

  return (
    <div>
      <p></p>
      {counters.left}
      <button onClick={handleClickLeft}>izq</button>
      <button onClick={handleClickReset}>reset</button>
      <button onClick={handleClickRight}>der</button>
      {counters.right}
      <p>{counters.menssage}</p>
      <p> total de clicks: {click.length}</p>
      {click.length === 0 
      ?
      <WarningNotClicks/>
      :
      <ListOfClick click={click} />
      }
    </div>
  );
}

export default App;
