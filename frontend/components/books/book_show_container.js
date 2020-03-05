import {connect} from 'react-redux'
import BookShow from './book_show'

import {fetchBook} from '../../actions/book_action'
import {fetchReviews} from  '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => 
{ 
    // debugger
return ({
    book: state.entities.books[ownProps.match.params.bookId] || {},
    reviews: Object.values(state.entities.reviews)
})}

const mapDispatchToProps = dispatch => ({
    fetchReviews: (bookId) => dispatch(fetchReviews(bookId)),
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(BookShow)