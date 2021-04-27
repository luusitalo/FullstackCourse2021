import React from 'react';
import ReactDOM from 'react-dom';
import Courses from './components/Courses'


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <div>
    <h1>Web development curriculum</h1> 
    <Courses courses={courses} />
  </div>
  )
}

console.log("Course component, plus going through the 'course' array with map, Ex. 2.1")
console.log("Total number of exercises added, Ex. 2.2. & 2.3")
console.log("Support for multiple courses, Ex 2.4")
console.log("Courses component and its subcomponents moved to their own file, Ex. 2.5")

ReactDOM.render(<App />, document.getElementById('root'))