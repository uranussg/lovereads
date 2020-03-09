import {connect} from 'react-redux'
import {logout } from '../actions/session_actions'

import HomePage from './home_page'

const mapStateToProp = (state) => {
    
    return {currentUser: state.entities.users[state.session.id]}
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProp, mapDispatchToProps)(HomePage)