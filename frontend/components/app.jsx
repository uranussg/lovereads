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
import TagListContainer from './tags/tag_list_container'
import TagShowContainer from './tags/tag_show_container';
import HomePageContainer from "./home_page_container"
import GreetingPage from './greeting-page'
import TagShelfContainer from './tags/tag_shelf_container'
import Footer from './footer'
import BrowseContainer from './books/browse_container'
import Load from './load'

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
        <Load />

        <Switch>
            <Route exact path="/" component={HomePageContainer}/>

            <ProtectedRoute exact path='/books/:bookId' component={BookShowContainer}/>
            <ProtectedRoute exact path='/bookshelf' component={BookShelfContainer}/>
            <ProtectedRoute exact path="/books/:bookId/reviews" component={ReviewFormContainer} />
            <Route exact path="/search/:body" component={SearchPage}/>
            <Route exact path='/writers/:writerId' component={WriterShowContainer}/>
            {/* <Route exact path='/tags' component={TagListContainer}/> */}
            <Route exact path='/tags'render={(props) => 
            <div className='tag-listpage'>
                <div className="taglist-container">
                    <h1 className='tags-list-nav'>All Tags</h1>
                    <TagListContainer {...props} />
                </div> 
            </div>
            }/>
            <Route exact path='/tags/:tagName' component={TagShowContainer}/>
            <ProtectedRoute exact path='/mytags' component={TagShelfContainer}/>
            <Route exact path='/browse/:type' component={BrowseContainer}/>

            {/* <Route path="/search/:body" render={(props) => 
            <div className="search-show">
                <BookIndexContainer {...props} />
            </div> 
            }/> */}
            <Route path="*" component={NotFound}/>           

        
        </Switch>
        <Route path='/' component={Footer}/>
    </div>
)

export default App