import EntryService from './handleEntries'
import App from '../App'

const removeEntry = (person) => {
    if (window.confirm("Delete " + person.name + "?")) {
        EntryService.remove( person.id )
        window.location.reload(true)
    }
}

export default {removeEntry}