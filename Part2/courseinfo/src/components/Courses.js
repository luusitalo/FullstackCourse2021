const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <li> 
        {part.name} {part.exercises}
      </li>   
    )
  }
  
  
  const Content = ({ course }) => {
    return (
      <ul>
        {course.parts.map(part => 
          <Part key={part.id} part={part} />
        )}
      </ul>
    )
  }
  
  const Total = ({ course }) => {
   const total = course.parts.map(part => part.exercises).reduce((a, b) => a + b)
  
    return (
    <p><strong>Total number of exercises: {total}</strong></p>  
    )
  } 
  
  const Course = ({ course }) => {
    return (
      <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      </div>
    )
  }
  
  const Courses = ({ courses }) => {
    return (
      <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
      </div>
    )
  }
  
  export default Courses