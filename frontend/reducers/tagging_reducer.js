import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_TAG, RECEIVE_TAGGING } from '../actions/tag_action'

export default (state = {}, action) => {
    

    Object.freeze(state)
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
                return action.user.taggings || state
        case RECEIVE_TAGGING:
            const newState = Object.assign({}, state)
            newState[action.tagging.book_id] = action.tagging
            return newState
        case LOGOUT_CURRENT_USER:
            return {}

        default:
            return state
    }
}