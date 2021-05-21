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
    console.log("Search value:", searched)
    event.preventDefault()
    setSearched(event.target.value)
  }

  const matches = countries.filter(country =>
        country.name.toLowerCase().includes(searched.toLowerCase())             
  )

 
  const Countries = ({ matches }) => {
   
    if (matches.length > 10) {
      return <p>Too many matches to show.</p>
    }

    if (matches.length === 1) {
      return <ShowCountry match = {matches[0]} />
    }

    else {
      return (
      <ul>
      {matches.map(match => 
        <li> 
          {match.name} 
          <button type = "submit" onClick = {() => {setSearched(match.name)}}> Show </button>  
        </li>      
      )}
      </ul>  
      )
    }
  
  }

  const ShowCountry = ({ match }) => {
    return (
      <div>
        <h2> {match.name} </h2>
        <p> Capital: {match.capital} </p>
        <p>Population: {match.population} </p>    
        <h3>Languages:</h3>
          <ul>
            {match.languages.map(language => 
            <li> {language.name} </li>
          )}
          </ul>
        <img src = {match.flag} alt = "flag" width = "100 %"  />  
      </div>
     )

  }


  return (
    <div>
      <h1>Country information</h1>
      <div>
        Find countries <input value={searched} onChange={handleSearched} />
      </div>

      <div> 
        <Countries matches = { matches } />
      </ div>
    </ div>    
  )

} // closes App

export default App