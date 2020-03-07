import { connect } from "react-redux";
import {fetchTag} from '../../actions/tag_action'
import TagShow from './tag_show'


const ms = (state, ownProps) => {
    
    return ({
        books: Object.values(state.entities.books) || {},
    })
}

const md = dispatch => ({
    fetchTag: (name) => dispatch(fetchTag(name))
})

export default connect(ms, md)(TagShow)

