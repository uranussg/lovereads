import * as APIUtil from "../utils/review_util"


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW ="REMOVE_REVIEW"
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
}) 

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
}) 

export const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = (bookId) => ispatch => {
    
    return APIUtil.fetchReviews(bookId)
    .then(reviews => {
        
        return dispatch(receiveReviews(reviews))},
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}

export const fetchReview = (reviewId) => dispatch => {
    
    return APIUtil.fetchReviews(reviewId)
    .then(review => {
        
        return dispatch(receiveReview(review))},
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}


export const createReview = (bookId,formReview) => dispatch => {
    
    return APIUtil.createReview(bookId, formReview)
    .then((review) => dispatch(receiveReview(review)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}

export const updateReview = (formReview) => dispatch => {
    
    return APIUtil.updateReview(formReview)
    .then((review) => dispatch(receiveReview(review)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteReview = (reviewId) => dispatch => {
    
    return APIUtil.deleteReview(reviewId)
    .then((review) => dispatch(receiveReview(review)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
}