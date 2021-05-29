import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import IsDuplicate from './components/IsDuplicate'
import EntryService from './services/handleEntries'


const App = () => {
  const [persons, setPersons] = useState([ ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [searched, setSearched ] = useState('')

  
  useEffect(() => {
    EntryService
    .getAll()
    .then(phonebook => {
      setPersons(phonebook)
    })
  }, []) 

  const addPerson = (event) => {
    event.preventDefault()
   // if name is already in the phonebook, issue a warning
  
   IsDuplicate(persons, newName)
     ? window.alert(`${newName} is already added to phonebook`)
     : (EntryService
        .create( { name: newName, number: newNumber } )
        .then(response => {
          setPersons(persons.concat({ name: newName, number: newNumber } ))
        }))
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
console.log("refactored, Ex 2.10")
console.log("using db.json and effect hook, Ex 2.11")
console.log("adding the new entries to the backend server, Ex. 2.15")
console.log("refactored the backend communication services, Ex. 2.16")

export default App