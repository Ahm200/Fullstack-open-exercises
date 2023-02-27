import React from 'react';
import { useState, useEffect } from 'react'
import PersonForm from './components/Personform'
import Filter from "./components/Filter"
import Person from "./components/Persons"
import personService from "./services/persons"
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filteredName, setFilteredName] = useState([]);
  const [filter, setFiler] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(returnedData => {
        setPersons(returnedData)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    const exist = persons.filter(person => person.name === newName)
    console.log(exist);
    if (exist.length === 0) {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(CreatedData => {
          setPersons(persons.concat(CreatedData))
          setNewName('');
          setNewNumber('');

          showMessage(`Added ${newName}`,"success");
        })
    }
    else {
      if (window.confirm(`${newName} is already added to phonebook,replace the old number with new one?`)) {
        const ChangedPerson = { ...exist[0], number: newNumber };
        console.log(ChangedPerson);
        personService
          .update(exist[0].id, ChangedPerson)
          .then(returnedData => {
            setPersons(persons.map(person => person.id !== returnedData.id ? person : returnedData));
          })
        showMessage(`Updated ${exist[0].name}'s number`,"success");
        setNewName('');
        setNewNumber('');
      }
    }
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const showMessage = (msg,type) =>
  {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
      setMessageType('');
    }, 3000);
  }
  const filterByName = event => {
    const search = event.target.value;
    setFiler(search);
    setFilteredName(persons.filter(person => person.name.toLowerCase().includes(search)))
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(response => {
          showMessage(`Deleted ${name}`,"error");
          const updatedPerson = persons.filter(p => p.id !== id)
          setPersons(updatedPerson)
        })
        .catch(error => {
          showMessage(`Information of ${name} has already been removed from server`,"error");
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} type={messageType} />

      <Filter filterByName={filterByName} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Person persons={persons} filter={filter} filteredName={filteredName} deletePerson={deletePerson} />
    </div>
  )
}

export default App
