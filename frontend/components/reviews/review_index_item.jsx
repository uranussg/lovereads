import React from 'react'
import RatingShow from './rating-show'
import CommentIndex from '../comments/comment_index'

 class ReviewIndexItem extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             showComments: false,
             comments:null
         }
         this.getComments = this.getComments.bind(this)
        //  this.testClick = this.testClick.bind(this)
     }

     getComments(e) {
        //  debugger
        e.preventDefault()
        e.stopPropagation()
        // console.log(e.target.value)
        //  this.setState({showComments: !this.state.showComments})
        this.setState({comments: <CommentIndex reviewId={this.props.review.id}/> })
     }

    //  testClick(e){
    //     e.preventDefault()

    //     console.log(e.target.value)
    //  }
     render() {
         
         const review = this.props.review
        //  const commentbutton= (this.props.review.body &&(!this.state.comments)) ? <button onClick={this.getComments} value={review.id}>Comments</button>:null

         return (
            <li  className="review-list-item">
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
                   <div>
                       {review.date}
                   </div>
               </div>
               <div className='review-body'><p >{review.body}</p></div>
               {/* {this.state.showComments && <CommentIndex reviewId={review.id}/>} */}
               {this.state.comments}
               { (this.props.review.body &&(!this.state.comments)) ? <button onClick={this.getComments} value={review.id}>Comments</button>:null}

               </div>
           </li>
       )
       
     }
 }

export default ReviewIndexItem