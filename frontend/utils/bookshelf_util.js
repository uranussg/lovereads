export const fetchBookshelves = () => {
    // debugger
    return $.ajax({
        method: "GET",
        url: "/api/bookshelves",
        error: err => console.log(err)
    })
}


export const createBookshelf = (bookshelf) => {
    // debugger
    return $.ajax ({
        method: "POST",
        url: "/api/bookshelves",
        data:{bookshelf}
    })
}

export const editBookshelf = (bookshelfId, bookshelf) => {
    debugger
    return $.ajax ({
        method: "Patch",
        url: `/api/bookshelves/${bookshelfId}`,
        data:{bookshelf}
    })
}

export const fetchBookshelf = (title) => {
    // debugger
    return $.ajax ({
        method: "GET",
        url: `/api/bookshelves/${title}`,
    })
}