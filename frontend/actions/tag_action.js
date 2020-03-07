import * as APIUtil from '../utils/tag_utils'
import {RECEIVE_BOOKS, receiveBooks} from '../actions/book_action'

export const RECEIVE_TAG = "RECEIVE_TAG"
export const RECEIVE_TAGS = "RECEIVE_TAGS"
export const RECEIVE_TAGGING = "RECEIVETAGGING"
export const RECEIVE_TAGS_ERRORS = "RECEIVE_TAGS_ERRORS"
export const REMOVE_TAGGING = "REMOVE_TAGGING"




export const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
}) 
export const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
}) 

export const receiveTagging = tagging => ({
    type: RECEIVE_TAGGING,
    tagging
})

export const removeTagging = (tagging) => ({
    type: REMOVE_TAGGING,
    tagging
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_TAGS_ERRORS,
    errors
})

export const fetchTags = () => dispatch => {
    
    return APIUtil.fetchTags()
    .then(tags => {
        
        return dispatch(receiveTags(tags))},
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const fetchTag = (name) => dispatch => {
    
    return APIUtil.fetchTag(name)
    .then(books => dispatch(receiveBooks(books)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}


export const createTagging = (bookId, tag) => dispatch => {

    return APIUtil.createTagging(bookId, tag)
    .then(tagging => dispatch(receiveTagging(tagging)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}


// export const updateTagging = (taggingId, tagging) => dispatch => {

//     return APIUtil.updateTagging(taggingId, tagging)
//     .then(tagging => dispatch(receiveTagging(tagging)),
//     errors => dispatch(receiveErrors(errors.responseJSON)))
// }

export const deleteTagging = (tagging_id) => dispatch => {

    return APIUtil.deleteTagging(tagging_id)
    .then(tagging => dispatch(removeTagging(tagging)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const createTag = (bookId, tagName) => dispatch => {
    
    return APIUtil.createTag(tagName)
    .then((tag) => dispatch(createTagging(bookId, tag)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}
