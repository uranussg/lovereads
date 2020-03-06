import *  as APIUtil from "../utils/writer_util"

export const RECEIVE_WRITER = "RECEIVE_WRITER"

export const receiveBook = (writer) => ({
    type: RECEIVE_WRITER,
    writer
}) 

export const receiveErrors = (errors) => ({
    type: RECEIVE_WRITER_ERRORS,
    errors
})

export const fetchWriter = (writerId) => dispatch => {
    
    return APIUtil.fetchWriter(writerId)
    .then(writer => dispatch(receiveWriter(writer)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
}