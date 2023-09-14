import React from 'react';

const PersonForm = ({addPerson,newName,newNumber,handleNameChange,handleNumberChange}) =>
{
    return (
        <div>
            <form onSubmit={addPerson}>
        <h1>add a new</h1>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}

export default PersonForm;