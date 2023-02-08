import React from 'react'

const Persons = ({ persons, filter, filteredName }) => {
  return (<div>
    {filter ? filteredName.map(person => <div key={person.id}>{person.name} {person.number}</div>) :
      persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)
    }
  </div>
  )


}

export default Persons;