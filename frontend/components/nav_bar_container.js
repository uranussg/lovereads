import {connect} from 'react-redux'
import {logout } from '../actions/session_actions'
import NavBar from './nav_bar'

const mapStateToProp = (state) => {
    // debugger
    return {currentUser: state.entities.users[state.session.id]}
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProp, mapDispatchToProps)(NavBar)