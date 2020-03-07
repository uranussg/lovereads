import {connect} from 'react-redux'
import BookshelfForm from './bookshelf_form'
import {createBookshelf, editBookshelf, removeBookshelf} from '../../actions/bookshelf_action'
import {withRouter} from 'react-router-dom'

const ms = (state, ownProps) => {
    
return {
    read: (state.entities.bookshelves[ownProps.match.params.bookId] ? state.entities.bookshelves[ownProps.match.params.bookId].title : null),
    bookId: ownProps.match.params.bookId,
    userId: state.session.id,
    bookshelf: state.entities.bookshelves[ownProps.match.params.bookId]
}
}
const md = dispatch => ({
    createBookshelf: bookshelf => dispatch(createBookshelf(bookshelf)),
    editBookshelf: (bookshelfId, bookshelf)=> dispatch(editBookshelf(bookshelfId, bookshelf)),
    removeBookshelf: (bookshelf) => dispatch(removeBookshelf(bookshelf))
}
)
export default  withRouter(connect(ms, md)(BookshelfForm))