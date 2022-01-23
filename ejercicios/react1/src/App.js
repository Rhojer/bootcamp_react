import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  const handleChange = (event) => {
    return setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Find contries</h2>
      <input type="text" onChange={handleChange}></input>
      <ul>
        <Mapeo countries={countries} search={search} />
      </ul>
    </div>
  );
};

const Mapeo = ({ countries, search }) => {
  let nuevo = [];
   nuevo = countries
    .filter(
      (country) => country.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    )
    .map((country) => {
      return country;
    });

  if (nuevo.length === 1) {
    return nuevo.map((nue) => {
      return (
        <div>
          <h1>{nue.name}</h1>
          <p>Capital: {nue.capital}</p>
          <p>Population: {nue.population}</p>
          <h3>languages:</h3>
          <ul>
            {nue.languages.map((lang) => (
              <li>{lang.name}</li>
            ))}
          </ul>
          <img src={nue.flag} width="100" />
        </div>
      );
    });
  } else {
    return (
      nuevo.map((nue) => {
        return (
          <div>
        <h1>{nue.name}</h1>
        </div>
        )
      })
      )
  }
};


export default App;
