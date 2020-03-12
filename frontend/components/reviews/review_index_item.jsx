import React from 'react'
import RatingShow from './rating-show'
import CommentIndex from '../comments/comment_index'

 class ReviewIndexItem extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             showComments: false
         }
         this.getComments = this.getComments.bind(this)
     }

     getComments() {

         this.setState({showComments: !this.state.showComments})
     }

     render() {
         
         const review = this.props.review
         return (
            <li className="review-list-item">
                <img src={window.demoPi} />
                <div className='review-item'>
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
               {this.state.showComments && <CommentIndex reviewId={review.id}/>}
               { (this.props.review.body &&(!this.state.showComments)) ? <button onClick={this.getComments}>Comments</button>:null}
               </div>
           </li>
       )
       
     }
 }

export default ReviewIndexItem