import { connect } from "react-redux";
import {fetchBookshelves, fetchBookshelf} from '../../actions/bookshelf_action'
import Bookshelf from './bookshelf'


const ms = (state, ownProps) => {
    
    return ({
        books: Object.values(state.entities.books) || {},
        titles: state.entities.users[state.session.id].bookshelves || []
    })
}

const md = dispatch => ({
    fetchBookshelves: () => dispatch(fetchBookshelves()),
    fetchBookshelf: (title) => dispatch(fetchBookshelf(title))
})

export default connect(ms, md)(Bookshelf)

