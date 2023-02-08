import React from 'react';
import { useState } from 'react'
import PersonForm from './components/Personform'
import Filter from "./components/Filter"
import Person from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
 

  const [filteredName, setFilteredName] = useState([]);
  const [filter, setFiler] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const exist = persons.filter(person => person.name === newName)

    if (exist.length === 0) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('');
      setNewNumber('');
    }
    else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const filterByName = (event) => {
    const search = event.target.value;
    setFiler(search);
    setFilteredName(persons.filter(person => person.name.toLowerCase().includes(search)))
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterByName={filterByName} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Person persons={persons} filter={filter} filteredName={filteredName}/>
    </div>
  )
}

export default App
