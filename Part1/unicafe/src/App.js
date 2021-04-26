import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => {
  return(
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}


const Statistics = ({ good, neutral, bad }) => {
  
  if (good === 0 && neutral === 0 && bad === 0){
    return("No feedback given")
  }

   return (
    <div>
      <table>
      <Statistic text="good" value ={good} />
      <Statistic text="neutral" value ={neutral} />
      <Statistic text="bad" value ={bad} />
      <Statistic text="total" value = {good + neutral + bad} />
      <Statistic text="average" value = {(good - bad) / (good + neutral + bad)} />
      <Statistic text="positive %" value ={good / (good + neutral + bad) * 100} />
      </table>
    </div>  
  )
}

const App = () => {
  // save clicks of each button to its own state
  // I'm collecting all cricks to an aarray but itäs not cirrently used anywhere
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
 
  const handleGoodClick = () => {
    setAll(allClicks.concat('1'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('0'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('-1'))
    setBad(bad + 1)
  }
  


  return (
    <div>
      <h1> Give feedback!</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      
      <h1> Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />


    </div>
  )
}

console.log("Basic buttons + stats Ex 1.6")
console.log("Average + percentage of positive, Ex. 1.7")
console.log("Statistics component, Ex. 1.8")
console.log("Stats displayed only when feecback is given, Ex. 1.9")
console.log("refactored button, statistics, Ex. 1.10")
console.log("formatted statistics as a table, Ex. 1.11")


export default App