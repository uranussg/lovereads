export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
import * as APIUtil from '../utils/session_api_util'

export const receriveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errortype, errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errortype,
    errors
})

export const login = formUser => dispatch => (
    APIUtil.login(formUser)
    .then( user => dispatch(receriveCurrentUser(user)),
    errors => {
        // debugger
        return dispatch(receiveErrors('signin', errors.responseJSON)) })
)


export const signup = formUser => dispatch => (
    APIUtil.signup(formUser)
    .then( user => dispatch(receriveCurrentUser(user)),
    errors => {
        // debugger
        return dispatch(receiveErrors('signup', errors.responseJSON))})

)
export const logout = () => dispatch => (
    APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
    errors => dispatch(receiveErrors(errors.responseJSON)))
)