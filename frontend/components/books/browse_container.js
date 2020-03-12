import {connect} from 'react-redux'
import {browseBooks} from '../../actions/book_action'
import Browse from '././browse'

const ms = (state, ownProps) => 
{ 
return ({
    type: ownProps.match.params.type,
    books: Object.values(state.entities.books)
})
}

const md = dispatch => {

return ({
    browseBooks: (type) => dispatch(browseBooks(type))
})
}
export default connect(ms, md)(Browse)