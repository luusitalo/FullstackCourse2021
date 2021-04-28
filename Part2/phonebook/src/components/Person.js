const Person = ({ person }) => {
    //now returning only name, preparing to return other info too
    return (
      <li>{person.name}: {person.number}</li>
    )
  }

  export default Person