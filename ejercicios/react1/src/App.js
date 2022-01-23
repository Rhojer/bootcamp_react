import {useState} from 'react'
import './App.css';

function App() { 
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'+584149693852' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterN, setfilterN ] = useState('')
  const handleChangeName = (event) =>{
    setNewName(event.target.value)
    
  }
  const handleChangeNumber = (event) =>{
    setNewNumber(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    setPersons([...persons,{name:newName, number:newNumber}])
    console.log(persons)
    
        
  }

  const filterNumbers = (event) => {
    setfilterN(event.target.value)

  }
  return (
    
    <div>
      <h2>Phonebook</h2>
      <p><strong>FILTRAR</strong></p>
      <input onChange={filterNumbers} />
      <form onSubmit={handleSubmit}>
      <h2>Add a New</h2>
        <div>
          <p>name: <input onChange={handleChangeName} /></p>
          number: <input onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     {persons
     .filter(person=>{
       return person.name.toLowerCase().indexOf(filterN.toLowerCase()) > -1
     })
     .map(person=>{
      
       return <p>{person.name} {person.number}</p>
     })}
    </div>
  )
}


export default App;
