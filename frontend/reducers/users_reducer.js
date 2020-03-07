import { RECEIVE_CURRENT_USER} from '../actions/session_actions'

import {RECEIVE_BOOKSHELF, REMOVE_BOOKSHELF} from '../actions/bookshelf_action'
import { RECEIVE_REVIEW } from '../actions/review_actions'
import {RECEIVE_TAG} from '../actions/tag_action'


export default (state = {}, action) => {
    
    const newState = Object.assign({},state)
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            
            newState[action.user.info.id] = action.user.info
            return newState
        // case RECEIVE_BOOKSHELF:
            
        //     const curr_user_id = action.bookshelf.user_id
        //     if (!newState[curr_user_id].bookshelves.includes(action.bookshelf.title))
        //     {
        //         newState[curr_user_id].bookshelves.push(action.bookshelf.title)
        //     }
        //     return newState
        case RECEIVE_TAG:
            
                const curr_user_id = action.tag.user_id
                if (!newState[curr_user_id].tags.includes(action.bookshelf.title))
                {
                    newState[curr_user_id].tags.push(action.tag.title)
                }
                return newState
        case RECEIVE_REVIEW:
            
            const user_id = action.review.user_id
                if (!(Object.keys(newState[user_id].rate).includes(action.review.book_id)))
                {
                    newState[user_id].rate[action.review.book_id]= action.review.rate
                }
            return newState
        case REMOVE_BOOKSHELF:

            newState[action.bookshelf.user_id].bookshelves[`${action.bookshelf.title}`] -= 1
            return newState
        case RECEIVE_BOOKSHELF:
            newState[action.bookshelf.user_id].bookshelves[`${action.bookshelf.title}`] += 1
            return newState
        default:
            return state
    }
}



   