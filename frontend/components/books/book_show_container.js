import {connect} from 'react-redux'
import BookShow from './book_show'

import {fetchBook} from '../../actions/book_action'
import {fetchReviews} from  '../../actions/review_actions'
import {createTag, createTagging} from '../../actions/tag_action';


const mapStateToProps = (state, ownProps) => 
{ 

    
    382110
return ({
    book: state.entities.books[ownProps.match.params.bookId] || {},
    reviews: Object.values(state.entities.reviews),
    userTags: state.entities.users[state.session.id].tags,
    taggings: Object.values(state.entities.taggings)
    // utob: Object.values(state.entities.taggings).filter(tagging=> tagging.book_id === state.entities.books[ownProps.match.params.bookId].id).map(tagging => tagging.name) || []
})}

const mapDispatchToProps = dispatch => ({
    fetchReviews: (bookId) => dispatch(fetchReviews(bookId)),
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    createTag: (bookId, tag) => dispatch(createTag(bookId, tag)),
    createTagging: (bookId, tag) => dispatch(createTagging(bookId, tag)),

})

export default connect(mapStateToProps, mapDispatchToProps)(BookShow)