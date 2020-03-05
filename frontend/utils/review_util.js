export const fetchReviews = (bookId) => {
    return $.ajax({
        method: "get", 
        url: `/api/books/${bookId}/reviews`})
}


export const createReview = (bookId, review) => {
    // debugger
    return $.ajax ({
        method: "POST",
        url: `/api/books/${bookId}/reviews`,
        data:{review:review,
            book_id: bookId
        }
    })
}
export const fetchReview = (reviewId) => {
    return $.ajax({
        method: "get", 
        url: `/api/reviews/${reviewId}`})
}

export const updateReview = (review) => {
    debugger
    return $.ajax ({
        method: "Patch",
        url: `/api/reviews/${review.bookId}`,
        data:{review:review
        }
    })
}

export const deleteReview = (reviewId) => {
    return $.ajax({
        method: "delete", 
        url: `/api/reviews/${reviewId}`})
}