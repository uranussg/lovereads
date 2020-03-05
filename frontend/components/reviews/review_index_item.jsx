import React from 'react'

 const ReviewIndexItem = ({review}) => (
     <li className="review-list-item">
         <div className="review-item-nav">
            <div className="review-author">
                By: <span>{review.user_id}</span>
            </div>
            <div className="rating">
                 Rate: <span>{review.rate}</span>
            </div>
        </div>
        <div className='review-body'><p>{review.body}</p></div>
    </li>
)

export default ReviewIndexItem