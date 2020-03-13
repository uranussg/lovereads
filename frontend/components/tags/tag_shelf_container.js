import { connect } from "react-redux";
import {deleteTagging} from '../../actions/tag_action'
import Tagshelf from './tag_shelf'
import {fetchBooks} from '../../actions/book_action'


const ms = (state, ownProps) => {
    
    return ({
        books: Object.values(state.entities.books) || {},
        // titles: Object.values(state.entities.users[state.session.id].tags).map(tag => tag[0]) || [],
        titles: Object.values(state.entities.users[state.session.id].tags).sort((a,b)=>b[1]-a[1]) || [],
        taggings: Object.values(state.entities.taggings),
        user_id: state.session.id
    })
}

const md = dispatch => ({
    fetchBooks: (user) => dispatch(fetchBooks(user)),
    deleteTagging: tagging_id => dispatch(deleteTagging(tagging_id))
})

export default connect(ms, md)(Tagshelf)
