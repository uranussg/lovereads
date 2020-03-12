import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_action'


export default (state = {}, action) => {
    const newState = Object.assign({}, state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_COMMENTS:
            
            return action.comments
         
        case RECEIVE_COMMENT:
            
            newState[action.comment.id] = action.comment
            return newState
        case REMOVE_COMMENT:
            
            delete newState[action.comment.id] 
            return newState

        default:
            return state
    }
}

