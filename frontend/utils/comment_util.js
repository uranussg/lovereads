export const fetchComments = (reviewId) => {
    
    return $.ajax({
        method: "get", 
        url: `/api/reviews/${reviewId}/comments`})
}


export const createComment = (reviewId, comment) => {
    
    return $.ajax ({
        method: "POST",
        url: `/api/reviews/${reviewId}/comments`,
        data:{comment:{body:comment}}
    })
}


export const deleteComment = (commentId) => {
    return $.ajax({
        method: "delete", 
        url: `/api/comments/${commentId}`})
}