export const searchBooks = (body) => {
    
    return $.ajax({
        method: "GET",
        url: `/api/searches/${body}`,
  
    })
}
