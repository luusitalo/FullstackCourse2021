import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [ countries, setCountries ] = useState([ ])
  const [ searched, setSearched ] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
   
  useEffect(hook, [])
  
  const handleSearched = (event) =>  {
    event.preventDefault()
    setSearched(event.target.value)
  }

   const matches = countries.filter(person => 
    person.name.toLowerCase().includes(searched.toLowerCase()))

    const Countries = ({ countries }) => {
      return (
        <ul>
        {countries.map(country => 
          <Country key={ country.name } country={ country } />
        )}
        </ul>
      )
    }

    const Country = ({ country }) => {
      //now returning only name, preparing to return other info too
      return (
        <li>{country.name}</li>
      )
    }


  return (
    <div>
      <h2>Country information</h2>
      <div>
        Find countries <input value={searched} onChange={handleSearched} />
      </div>
      
     <div>
       <Countries countries = {matches} />
     </div>

    </div>
  )
}

export default App