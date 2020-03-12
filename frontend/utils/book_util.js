export const fetchBooks = (user) => {
    
    return $.ajax({
        method: "GET",
        url: "/api/books",
        data:{user}
  
    })
}



export const fetchBook = (bookId) => {
    
    return $.ajax ({
        method: "GET",
        url: `/api/books/${bookId}`,
    })
}


export const browseBooks = type => {
    return $.ajax ({
        method: "GET",
        url: `/api/browse/${type}`,
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