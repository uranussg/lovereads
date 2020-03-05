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

    componentDidMount(){

            this.props.fetchBook(this.props.match.params.bookId)
        
    }

    render() {
        const {book} = this.props

        return(
            <div className="book-show-page">
                <div className="book-info">
                    <div className="book-info-col-1">

                    <img src="assets/demo_book_cover.jpg"/>
                    <BookshelfFormContainer/>

                    </div>
                    <div className="book-info-col-2">
                    <h2>{book.title}</h2>
                    <h3>by {book.writer_id}</h3>
                    <p>
                        {book.description}
                    </p>
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