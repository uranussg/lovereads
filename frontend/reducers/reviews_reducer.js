import {RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions'


export default (state = {}, action) => {
    const newState = Object.assign({}, state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_REVIEWS:
            
            return action.reviews
         
        case RECEIVE_REVIEW:
            
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            
            newState[action.review.id] = undefined

        default:
            return state
    }
}

