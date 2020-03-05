import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from "react-router-dom"
import SignupFormContainer from './session/signup_form_container'
import SigninFormContainer from './session/signin_form_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleDropdown = this.handleDropdown.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.logout()
    }
    handleDropdown(e) {
        this.setState({showDropdown: !this.state.showDropdown})
        const profile = document.getElementsByClassName("user-profile")[0]
        profile.classList.toggle("darken-background")
    }
  render () {

    if (this.props.currentUser){
        return (
            <header>
                <div className='nav-bg'>
                <nav>
                    <Link to="/"><h1 id="title">Love<strong>Reads</strong> </h1></Link>

                    <div className='navbar-links'>
                    <Link to='/bookshelf'><div>My Books</div>  </Link>
                    </div>

                    <div className="user-profile" onClick={this.handleDropdown}>
                    <div className='user-profile-picture'></div>
                    {
                       (this.state.showDropdown)? (<ul>
                    <li><strong>{this.props.currentUser.username}</strong></li>
                    <li>Comment</li>
                    <li>Favorite Genre</li>

                    <li onClick={this.handleSubmit}>Sign out</li>                
                    </ul>) : null
                    }
                    
                    </div>

                </nav>
                </div>
            </header>
        
        )
    }
    else {
        return (
        <header>
            <div className='nav-bg'>
            <nav> 

                <h1 id="title">Love<strong>Reads</strong> </h1>
                <SigninFormContainer />
            </nav>
            </div>
            <div className="home-page-signup">
            
                <SignupFormContainer />

            </div>
        </header>
        )
    }
    }
}

export default NavBar