import React from "react"

import { Route, Switch, Link } from "react-router-dom"
import {AuthRoute, ProtectedRoute} from '../utils/route_util.js'
import BookIndexContainer from './books/book_index_container'

import TagListContainer from './tags/tag_list_container'

class HomePage extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div className="homepage-main">   
                       
                <div className='homepage-col-1'>
         {
                        this.props.currentUser ? null: <div className='greeting-text'>
                        <div>
                            <div className='title'>Deciding what to read next?</div>
                            <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                        </div>
                        <div>
                            <div className='title'>What are your friends reading?</div>
                            <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
                        </div>
                    </div>
                    }
                    <div className='homepage-book-list'>
                    <div className='label-title'>
                    {!this.props.currentUser? `What will you discover?` : `New Books` }
                </div>
                <BookIndexContainer  />
                </div>
        </div>


        <div className="homepage-col-2">
            <div className='label-title'>
                <h1>Hot Tags</h1>
                <Link to='/tags'>
                    <div className='arrow-right'></div>
                    <span className="view-all">View All</span>
                </Link>
            </div>
                <TagListContainer  />
        </div>

    </div>      
)
    }
}




export default HomePage