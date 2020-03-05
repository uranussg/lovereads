import React from 'react'
import ReviewListItem from './review_index_item'
import { Link, withRouter } from 'react-router-dom'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
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