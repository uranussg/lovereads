
export const START_LOADING_BOOKS = 'START_LOADING_BOOKS'

export const loadBooks = (load) => ({
    type: START_LOADING_BOOKS,
    load
})