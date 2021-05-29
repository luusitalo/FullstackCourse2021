import RemoveService from '../services/remover'

const Person = ({ person }) => {
  return (
   <li>
      {person.name}: {person.number}  &nbsp; 
      <button type = "submit" onClick = {() => {RemoveService.removeEntry(person)}}> delete </button> 
    </li>
  )
}

export default Person