import {connect} from 'react-redux'
import SignupForm from './signup_form'
import { signup } from '../../actions/session_actions'

const mapStateToProp = (state, ownProps) =>{
    // debugger
return  ({
    errors: state.errors.session,
    formType: "Sign Up"
})}

const mapDispatchToProps = dispatch => ({
    processForm: (formUser) => dispatch(signup(formUser))
})

export default connect(mapStateToProp, mapDispatchToProps)(SignupForm)