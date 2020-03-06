import {RECEIVE_LIVE_SEARCH} from '../actions/search_action'

export default (state = {}, action) => {
    const newState = Object.assign({}, state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_LIVE_SEARCH:
            
            return action.searchResults

        default:
            return state
    }
}
