import {connect} from 'react-redux'
import {fetchBooks} from '../../actions/book_action'
import BookIndex from './book_index'

const ms = state => 
{ 
return ({
    books: Object.values(state.entities.books)
})
}

const md = dispatch => {

return ({
    fetchBookIndex: () => dispatch(fetchBooks())
})
}
export default connect(ms, md)(BookIndex)