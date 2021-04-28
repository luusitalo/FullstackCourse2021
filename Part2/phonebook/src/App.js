import React, { useState } from 'react'
import Persons from './components/Persons'
import IsDuplicate from './components/IsDuplicate'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searched, setSearched ] = useState('')

  
  const addPerson = (event) => {
    event.preventDefault()
   // if name is already in the phonebook, issue a warning
  
   IsDuplicate(persons, newName)
     ? window.alert(`${newName} is already added to phonebook`)
     : setPersons(persons.concat({ name: newName, number: newNumber } ))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) =>  {
    setNewName(event.target.value)
    }

  const handleNumberChange = (event) =>  {
    setNewNumber(event.target.value)
  }

  const handleSearched = (event) =>  {
    event.preventDefault()
    setSearched(event.target.value)
  }

   const matches = persons.filter(person => 
    person.name.toLowerCase().includes(searched.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter: <input value={searched} onChange={handleSearched} />
      </div>
      <h3>Add new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h3>Numbers</h3>
     <div>
       <Persons persons = {matches} />
     </div>

    </div>
  )
}

console.log("phonebook basics, adding names, Ex. 2.6")
console.log("check if name is already on list, Ex. 2.7")
console.log("add number, ex. 2.8")
console.log("Search box, Ex. 2.9")
console.log("refactored")

export default App