import React from "react"

import { Route, Switch, Link } from "react-router-dom"
import {AuthRoute, ProtectedRoute} from '../utils/route_util.js'
import BookIndexContainer from './books/book_index_container'

import TagListContainer from './tags/tag_list_container'

const GreetingPage = () => (
    <div className="greeting-main">   
        <div className='greeting-col-1'>
            <div className='greeting-text'>
                <div>
                    <div className='title'>Deciding what to read next?</div>
                    <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
                </div>
                <div>
                    <div className='title'>What are your friends reading?</div>
                    <p>What are your friends reading?</p>
                </div>
            </div>
            <div className='label-title'>
                What will you discover>
            </div>
                <BookIndexContainer  />
        </div>


        <div className="greeting-col-2">
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

export default GreetingPage