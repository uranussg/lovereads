import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username: "",
            password: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.demoUser = this.demoUser.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.clearErrors()
        this.props.processForm(this.state)
        // debugger
        this.setState({
            username: "",
            password: ""
        })

    }

    demoUser(e) {
        e.preventDefault()
        this.props.processForm({
            username: "song1",
            email:"song1",
            password: 111111
        })
        // debugger
        this.setState({
            username: "",
            password: ""
        })
    }

    handleUpdate(type) { 
        return e => {
            e.preventDefault()
            this.setState({[type]:e.target.value})
        }

    }
    render() {
        let errorMessage
        if (Object.keys(this.props.errors).length> 0)
            { 
                errorMessage = this.props.errors.signin}
            // debugger
        return (<div className="session-form">
            <form className="signin-form">
                <div>
                    <label >Email address</label> 
                    <input type="text" 
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.handleUpdate("email")}/>
                </div>
                <div>
                    <label>Password</label> 
                    <input type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleUpdate("password")}/>

                </div>
                <button className="submit" onClick={this.handleSubmit}>Sign in</button>
                <button className="demouser" onClick ={this.demoUser}>Demo</button>
            </form>
            {errorMessage?<div className="error-messages">{errorMessage}</div> : null }
     
        </div>)
    }
}

export default SessionForm