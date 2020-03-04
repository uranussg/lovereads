import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions"


export default (state = {}, action) => {
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return []
        case RECEIVE_SESSION_ERRORS:
            const newState =Object.assign({}, state)
            newState[action.errortype] = action.errors
            return newState
        default:
            return state
    }
}
 