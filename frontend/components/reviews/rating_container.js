import { connect } from "react-redux";
import Rating from './rating'
import {withRouter} from 'react-router-dom'
import { createReview, updateReview } from "../../actions/review_actions";


const mapStateToProps = (state, ownProps) => 

{
   
    
    return ({
    userId: state.session.id,
    bookId: ownProps.match.params.bookId,
    rate: state.entities.users[state.session.id].rate[ownProps.match.params.bookId],
})
}

const mapDispatchToProps = dispatch => ({
    createReview: (bookId, formReview) => dispatch(createReview(bookId, formReview)),
    updateReview: (bookId, formReview) => dispatch(updateReview(bookId, formReview)),
    

})


export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Rating))