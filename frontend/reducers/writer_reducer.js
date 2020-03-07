import {RECEIVE_BOOKS, RECEIVE_WRITER} from '../actions/writer_action'


export default (state = {}, action) => {
    

    Object.freeze(state)
    switch (action.type) {

         
        case RECEIVE_WRITER:
            
            const newState = Object.assign({}, state)
            newState[action.writer.writer.id] = action.writer.writer            
            return newState

        default:
            return state
    }
}