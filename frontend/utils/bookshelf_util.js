export const fetchBookshelves = () => {
    
    return $.ajax({
        method: "GET",
        url: "/api/bookshelves",
    })
}


export const createBookshelf = (bookshelf) => {
    
    return $.ajax ({
        method: "POST",
        url: "/api/bookshelves",
        data:{bookshelf}
    })
}

export const editBookshelf = (bookshelfId, bookshelf) => {

    return $.ajax ({
        method: "Patch",
        url: `/api/bookshelves/${bookshelfId}`,
        data:{bookshelf}
    })
}

export const fetchBookshelf = (title) => {
    
    return $.ajax ({
        method: "GET",
        url: `/api/bookshelves/${title}`,
    })
}