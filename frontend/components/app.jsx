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
import NotFound from './not_found';
import SearchPage from './search/search_page'
import WriterShowContainer from './writers/writer_show_container'

const App = () => (
    <div className="bg">
        

        <Switch>
            <AuthRoute exact path="/signup" component={(props) => 
            <div className="single-page-session">
                <SignupFormContainer {...props} />
            </div> 
            }/>
            <AuthRoute exact path="/login" component={(props) => 
            <div className="single-page-session">
                <SigninFormContainer {...props} />
            </div> 
            }/>
            <Route path="/" component={NavBarContainer}/>
        </Switch>

        <Switch>
            <Route exact path="/" render={(props) => 
            <div className="homepage-main-content">
                <BookIndexContainer {...props} />
            </div> 
            }/>

            <ProtectedRoute exact path='/books/:bookId' component={BookShowContainer}/>
            <ProtectedRoute exact path='/bookshelf' component={BookShelfContainer}/>
            <ProtectedRoute exact path="/books/:bookId/reviews" component={ReviewFormContainer} />
            <Route path="/search/:body" component={SearchPage}/>
            <Route path='/writers/:writerId' component={WriterShowContainer}/>
            {/* <Route path="/search/:body" render={(props) => 
            <div className="search-show">
                <BookIndexContainer {...props} />
            </div> 
            }/> */}
            <Route path="*" component={NotFound}/>           

        
        </Switch>
    </div>
)

export default App