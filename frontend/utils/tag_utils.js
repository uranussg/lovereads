export const fetchTags = () => {
    
    return $.ajax({
        method: "GET",
        url: "/api/tags",
        data:{}
    })
}



export const fetchTag = (name) => {
    
    return $.ajax ({
        method: "GET",
        url: `/api/tags/${name}`,
    })
}


export const createTag = (tagName) => {
    
    return $.ajax ({
        method: "POST",
        url: "/api/tags",
        data:{tagName}
    })
}

export const createTagging = (book_id, tag) => {

    return $.ajax ({
        method: "POST",
        url: `/api/tags/${tag.id}/taggings`,
        data:{book_id}
    })
}

// export const updateTagging = (tagging_id, tagging) => {

//     return $.ajax ({
//         method: "Patch",
//         url: `/api/taggings/${tagging_id}`,
//         data:{tagging}
//     })
// }

export const deleteTagging = (tagging_id) => {

    return $.ajax ({
        method: "delete",
        url: `/api/taggings/${tagging_id}`,

    })
}