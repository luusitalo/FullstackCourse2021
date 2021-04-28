const IsDuplicate = (persons, newName) => {
    return(
      persons.findIndex((person) => person.name === newName) > -1
    )
  } 

  export default IsDuplicate