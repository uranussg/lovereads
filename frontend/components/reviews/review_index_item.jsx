import React from 'react'
import RatingShow from './rating-show'

 const ReviewIndexItem = ({review}) => (
     <li className="review-list-item">
         <div className="review-item-nav">
            <div className="review-author">
                <span>{review.user}</span>
            </div>
            <p>rated it</p>
            <div className="rating-show">
                <RatingShow key={review.id} rate={review.rate}/>
            </div>
        </div>
        <div className='review-body'><p>{review.body}</p></div>
    </li>
)

export default ReviewIndexItem