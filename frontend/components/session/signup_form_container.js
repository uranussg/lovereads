import {connect} from 'react-redux'
import SignupForm from './signup_form'
import { signup, clearErrors } from '../../actions/session_actions'

const mapStateToProp = (state, ownProps) =>{
    
return  ({
    errors: state.errors.session,
    formType: "Sign Up"
})}

const mapDispatchToProps = dispatch => ({
    processForm: (formUser) => dispatch(signup(formUser)),
    clearErrors: ()=>dispatch(clearErrors())
})

export default connect(mapStateToProp, mapDispatchToProps)(SignupForm)