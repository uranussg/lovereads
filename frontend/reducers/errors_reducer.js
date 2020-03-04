import {combineReducers} from "redux"

import sessionErrorsReducer from "./session_errors_reducer"
import usersReducer from './users_reducer'

 export default combineReducers ({
    session: sessionErrorsReducer,

})


