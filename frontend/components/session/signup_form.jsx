import React from 'react'


class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username: "",
            password: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount(){
        if (this.props.errors){
            this.props.clearErrors()
        }
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.clearErrors()
        this.props.processForm(this.state)
        
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
            { errorMessage = this.props.errors.signup}
        return (<div className="session-form">
            <form className="signup-form">
                <div>
                    <label >Username</label> 
                    <input type="text" 
                    placeholder="Userame"
                    value={this.state.username}
                    onChange={this.handleUpdate("username")}/>
                </div>
                <div>
                    <label >Email</label> 
                    <input type="text" 
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.handleUpdate("email")}/>
                </div>
                <div>
                    <label>Password</label> 
                    <input type="text" 
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleUpdate("password")}/>

                </div>
                <button className="submit" onClick={this.handleSubmit}>Sign up</button>
            </form>
            {errorMessage?<div className="error-messages">{errorMessage}</div> : null }
     
        </div>)
    }
}

export default SignupForm