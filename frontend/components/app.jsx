import React from "react"
import NavBarContainer from './nav_bar_container'
import SignupFormContainer from './session/signup_form_container'
import SigninFormContainer from './session/signin_form_container'
import { Route, Switch } from "react-router-dom"
import {AuthRoute, ProtectedRoute} from '../utils/route_util.js'
import BookIndexContainer from './books/book_index_container'
import BookShowContainer from './books/book_show_container'
import BookShelfContainer from './books/bookshelf_container'
import ReviewFormContainer from './reviews/review_form_container'

const App = () => (
    <div className="bg">
        

        <Switch>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <AuthRoute exact path="/login" component={SigninFormContainer}/>
            <Route path="/" component={NavBarContainer}/>
        </Switch>
        <div className="homepage-main-content">
            <Route exact path='/' component={BookIndexContainer}/>
        </div>
        <Switch>
        <ProtectedRoute exact path='/books/:bookId' component={BookShowContainer}/>
        <ProtectedRoute exact path='/bookshelf' component={BookShelfContainer}/>
        <ProtectedRoute exact path="/books/:bookId/reviews" component={ReviewFormContainer} />
        </Switch>
    </div>
)

export default App