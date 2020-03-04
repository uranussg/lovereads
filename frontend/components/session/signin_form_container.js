import {connect} from 'react-redux'
import {login } from '../../actions/session_actions'
import SessionForm from './session_form'


const mapStateToProp = (state) => ({
    errors: state.errors.session,
    formType: "Sign In"
})

const mapDispatchToProps = dispatch => ({
    processForm: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToProp, mapDispatchToProps)(SessionForm)