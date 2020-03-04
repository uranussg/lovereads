import React from 'react'
import {Redirect, withRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

const Auth = ({path, exact,loggeIn, component: Component}) =>  {

return (
    <Route 
    path={path}
    exact={exact}
    render={props => 
    loggeIn ? <Redirect to="/"/> : <Component {...props}/>} />
)
    }
const Protected = ({path, exact, loggeIn, component: Component}) => (
    <Route 
    path={path}
    exact={exact}
    render={props =>
        loggeIn ? <Component {...props}/> : <Redirect to="/login"/>
    }
    />
)

const mapStateToProps = state => ({
    loggeIn: !!state.session.id
})

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
