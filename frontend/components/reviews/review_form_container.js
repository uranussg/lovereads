import { connect } from "react-redux";
// import { createReview } from "../actions/review_actions"
import { createReview,updateReview } from "../../actions/review_actions";
import ReiviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
    
return ({
    bookId: ownProps.match.params.bookId,
    book: state.entities.books[ownProps.match.params.bookId],
    rate: state.entities.users[state.session.id].rate[ownProps.match.params.bookId],
})
}
const mapDispatchToProps = (dispatch) => ({
    createReview: (bookId, formReview) => dispatch(createReview(bookId, formReview)),
    updateReview: (bookId, formReview) => dispatch(updateReview(bookId, formReview)),

})


export default connect(mapStateToProps, mapDispatchToProps)(ReiviewForm)