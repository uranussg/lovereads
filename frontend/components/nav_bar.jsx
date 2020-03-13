import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from "react-router-dom"
import SignupFormContainer from './session/signup_form_container'
import SigninFormContainer from './session/signin_form_container'
import SearchBarContainer from './search/search_bar_container'
import TagShlefContainer from './tags/tag_shelf_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false,
            showBrowse:false
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleDropdown = this.handleDropdown.bind(this)
        // this.handleBrowse = this.handleBrowse.bind(this)
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

    // handleBrowse(e) {
    //     this.setState({showBrowse: !this.state.showBrowse})
    //     const browsenav = document.getElementsByClassName("browse-nav")[0]
    //     browsenav.classList.toggle("darken-background")
    // }
  render () {
      const browselist = (<div className="browse-list">
      <ul>
          <li> <Link to="/browse/new">New Books</Link></li>
          <li> <Link to='/browse/rate'>Top Rated</Link></li>
          <li> <Link to='/browse/recommendation'>Recommendations</Link></li>
      </ul>

  </div>)

    if (this.props.currentUser){
        return (
            <header>
                <div className='nav-bg'>
                <nav>
                    <Link to="/"><h1 id="title">Love<strong>reads</strong> </h1></Link>

                    <div className='navbar-links'>
                        <Link to='/bookshelf'><div>My Books</div>  </Link>
                        <Link to='/mytags'><div>My Tags</div> </Link>
                        <a className='browse-nav'>
                        {/* <div  onClick={this.handleBrowse}> */}
                        <div>
                       Browse </div>
                        {/* {this.state.showBrowse? browselist:null} */}
                        {browselist}
                        </a>
                    </div>
                    <SearchBarContainer/>

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
        <header className='unlogged'>
            <div className='nav-bg'>
            <nav> 

                <h1 id="title">Love<strong>reads</strong> </h1>
                <SigninFormContainer />
            </nav>
            </div>
            <div className="masthead">
                <dir className='headline'>
                    <div className='headline-content'></div>
                    <img src="assets/signup-headline.png" alt=""/>
                </dir>
                <div className='new-to-here'>
                    <h2>Create a free account!</h2>
                <SignupFormContainer />
                </div>
            </div>
        </header>
        )
    }
    }
}

export default NavBar