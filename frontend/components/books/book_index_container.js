import {connect} from 'react-redux'
import {fetchBooks} from '../../actions/book_action'
import BookIndex from './book_index'
import { loadBooks } from '../../actions/load_action'
const ms = state => 
{ 
return ({
    books: Object.values(state.entities.books)
})
}

const md = dispatch => {

return ({
    fetchBookIndex: () => dispatch(fetchBooks()),
    loadBooks: () => dispatch(loadBooks('loadbooks'))
})
}
export default connect(ms, md)(BookIndex)