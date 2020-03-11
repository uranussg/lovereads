import { connect } from "react-redux";
// import { createReview } from "../actions/review_actions"
import { createReview,updateReview } from "../../actions/review_actions";
import {fetchBook} from '../../actions/book_action'
import ReiviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
    
return ({
    review: Object.values(state.entities.reviews).length? Object.values(state.entities.reviews).filter(review=> review.user_id === state.session.id)[0] || {} : {},
    userId: state.session.id,
    bookId: ownProps.match.params.bookId,
    book: state.entities.books[ownProps.match.params.bookId],
    rate: state.entities.users[state.session.id].rate[ownProps.match.params.bookId],
})
}
const mapDispatchToProps = (dispatch) => ({
    createReview: (bookId, formReview) => dispatch(createReview(bookId, formReview)),
    updateReview: (bookId, formReview) => dispatch(updateReview(bookId, formReview)),
    fetchBook: (bookId) => dispatch(fetchBook(bookId))

})


export default connect(mapStateToProps, mapDispatchToProps)(ReiviewForm)