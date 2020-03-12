import * as APIUtil from "../utils/comment_util"


export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT ="REMOVE_COMMENT"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"


export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
}) 

export const receiveComment= (comment) => ({
    type: RECEIVE_COMMENT,
    comment
}) 

export const receiveErrors = (errors) => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

export const fetchComments = (reviewId) => ispatch => {
    
    return APIUtil.fetchComments(reviewId)
    .then(comments => {
        
        return dispatch(receiveComments(comments))},
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}




export const createComment = (comment) => dispatch => {
    
    return APIUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}



export const deleteComment = (commentId) => dispatch => {
    
    return APIUtil.deleteComment(commentId)
    .then((comment) => dispatch(receiveComment(comment)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}