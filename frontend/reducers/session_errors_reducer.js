import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../actions/session_actions"


export default (state = {}, action) => {
    
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {signin:[], signup:[]}
        case RECEIVE_SESSION_ERRORS:
            const newState =Object.assign({}, state)
            newState[action.errortype] = action.errors
            return newState

        case CLEAR_SESSION_ERRORS:
            return {signin:[], signup:[]}
        default:
            return state
    }
}
 