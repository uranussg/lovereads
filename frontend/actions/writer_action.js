import *  as APIUtil from "../utils/writer_util"

export const RECEIVE_WRITER = "RECEIVE_WRITER"
export const RECEIVE_WRITER_ERRORS = "RECEIVE_WRITER_ERRORS"

export const receiveWriter = (writer) => ({
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