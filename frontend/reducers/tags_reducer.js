import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_TAG, RECEIVE_TAGS } from '../actions/tag_action'

export default (state = {}, action) => {
    

    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TAGS:
            return action.tags
        // case RECEIVE_TAG:
        //     const newState = Object.assign({}, state)
        //     newState[action.tag.id] = action.id
        //     return newState
         

        default:
            return state
    }
}