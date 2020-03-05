export const fetchBooks = () => {
    
    return $.ajax({
        method: "GET",
        url: "/api/books",
  
        error: err => console.log(err)
    })
}



export const fetchBook = (bookId) => {
    
    return $.ajax ({
        method: "GET",
        url: `/api/books/${bookId}`,
    })
}

export const fetchReviews = (bookId) => {
    return $.ajax({
        method: "get", 
        url: `/api/books/${bookId}/reviews`})
}

export const createReview = (bookId, review) => {
    
    return $.ajax ({
        method: "POST",
        url: `/api/books/${bookId}/reviews`,
        data:{review:review,
            book_id: bookId
        }
    })
}