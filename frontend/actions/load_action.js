
export const START_LOADING_BOOKS = 'START_LOADING_BOOKS'

export const loadBooks = (load) =>{ 
    
    return {
    type: START_LOADING_BOOKS,
    load
}}