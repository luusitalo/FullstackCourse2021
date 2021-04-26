import React, { useState } from 'react'


const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)) 

  const handleVote = () => {
     const copy = [...points] 
   copy[selected] +=1
   setPoints(copy)
  }  
  
  const handleNextClick = () => {
        setSelected(Math.floor(Math.random()*anecdotes.length))
      }

  let mostPop = points.indexOf(Math.max(...points));

 console.log(points)  


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} </p>
      <p>Votes: {points[selected]}</p>
      <Button handleClick={handleVote} text = 'Vote' />
      <Button handleClick={handleNextClick} text='Random anecdote' />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostPop]}</p>
      <p>This has {points[mostPop]} votes.</p>
    </div>
  )
}

console.log("random quote, ex. 1.12")
console.log("votes, ex. 1.13")
console.log("most popular anecdote, Ex. 1.14")


export default App
