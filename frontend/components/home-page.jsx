import React from "react"

import { Route, Switch, Link } from "react-router-dom"
import {AuthRoute, ProtectedRoute} from '../utils/route_util.js'
import BookIndexContainer from './books/book_index_container'

import TagListContainer from './tags/tag_list_container'

const HomePage = () => (
    <div className="homepage-main">   
        <div className='homepage-col-1'>
            <div className='label-title'>
                New Books
            </div>
                <BookIndexContainer  />
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

export default HomePage