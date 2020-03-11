import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_TAG, RECEIVE_TAGGING, REMOVE_TAGGING } from '../actions/tag_action'

export default (state = {}, action) => {
    

    Object.freeze(state)
    const newState = Object.assign({}, state)
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            
                return action.user.taggings || state
        case RECEIVE_TAGGING:
            newState[action.tagging.id] = action.tagging
            return newState
        case REMOVE_TAGGING:

            delete newState[action.tagging.id]
            return newState
        case LOGOUT_CURRENT_USER:
            return {}

        default:
            return state
    }
}