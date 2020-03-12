import React from 'react'
import ReviewListItem from './review_index_item'
import { Link, withRouter } from 'react-router-dom'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {

        // if (this.props.book.id !== prevProps.book.id || this.props.review !== prevProps.review) {
        //     this.props.fetchReviews(this.props.book.id)
        // }
        
        if (this.props.book.id !== prevProps.book.id) {
            this.props.fetchReviews(this.props.book.id)
        }
    }

    componentDidMount(){
        
        this.props.fetchReviews(this.props.match.params.bookId)
    }


    render() {
        let reviewList = []
    
         reviewList =
            this.props.reviews.map( review => (
            <ReviewListItem  key={review.id} review={review}/>
            ))
            
            
        return(
            <div className="review-container"> 
                <label>

                    <ul className='review-list'>
                    {reviewList}
                    </ul>
                </label>

            </div>
        ) 
    }
}

export default  withRouter(ReviewIndex)