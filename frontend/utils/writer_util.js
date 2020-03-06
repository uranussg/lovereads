
export const fetchWriter = (writerId) => {
    
    return $.ajax ({
        method: "GET",
        url: `/api/writers/${writerId}`,
    })
}