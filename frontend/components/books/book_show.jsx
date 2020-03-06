import React from 'react'
import {Link} from 'react-router-dom'
import BookshelfFormContainer from './bookshelf_form_container'
import { ProtectedRoute} from '../../utils/route_util.js'
// import { ReviewFormContainer } from "../reviews/review_form_container";
import ReviewIndex from '../reviews/review_index'
import RatingContainer from '../reviews/rating_container';




class BookShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        const num = parseInt(this.props.match.params.bookId)
        // 
        if(this.props.book.id !== num) {
            
            this.props.fetchBook(num)
        }
    }

    componentDidMount(){
        
            this.props.fetchBook(this.props.match.params.bookId)
        
    }

    toggleDetail(){
    
        let detail = document.getElementsByClassName("more-detail")
 
        detail[0].classList.toggle("hidden")
        detail[1].classList.toggle("hidden")
        
    }

    render() {
        const {book} = this.props
        
        return(
            <div className="book-show-page">
                <div className="book-info">
                    <div className="book-info-col-1">

                    <img src={window.demoCover}/>
                    <BookshelfFormContainer/>

                    </div>
                    <div className="book-info-col-2">
                        <div className="book-basic-info">
                            <h2>{book.title}</h2>
                            <h3>by {book.writer}</h3>
                            <p>
                                {book.description}
                            </p>
                        </div>
                        <div className='book-more-detail'>
                            <a onClick={this.toggleDetail} className='more-detail'>...More Detail</a>
                            <ul className="more-detail hidden">
        <li><span className='attr'>ISBN</span><span className='value'>{book.isbn}</span></li>
        <li><span className='attr'>Edition Language</span><span className='value'>{book.language}</span></li>
        <li><span className='attr'>House</span><span className='value'>{book.house}</span></li>
        <li><span className='attr'>Published Time</span><span className='value'>{book.publish_at}</span></li>

                            <a onClick={this.toggleDetail}>...Less Detail</a>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className='reviews'>
                    <h2>Reviews </h2>
                    <div className='rating-review-form'>
                    <RatingContainer/>
                    <Link to={`/books/${book.id}/reviews`}>Write Review</Link>
                    </div>
                    <ReviewIndex fetchReviews={this.props.fetchReviews} reviews={this.props.reviews} book={book}/>
                </div>
            </div>
        )
    }
}

export default BookShow