import React from 'react'
import {Link} from 'react-router-dom'
import BookshelfFormContainer from './bookshelf_form_container'
import { ProtectedRoute} from '../../utils/route_util.js'
// import { ReviewFormContainer } from "../reviews/review_form_container";
import ReviewIndex from '../reviews/review_index'
import RatingContainer from '../reviews/rating_container'
import TagForm from '../tags/tag_form'
import RatingShow from '../reviews/rating-show'




class BookShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.book
    }

    componentDidUpdate(prevProp) {
        const num = parseInt(this.props.match.params.bookId)
        // // 
        if(this.props.book.id !== num)
        // if(JSON.stringify(this.props.book)!==JSON.stringify(prevProp.book))
         {
            // this.setState(this.props.book)
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
        
        let ratnum= 0
       if  (book.rateDetail)
        { for( let i=1;i<6;i++){
        ratnum+= book.rateDetail[i]
            }}
     
         
        const mytagonbook = book? this.props.taggings
    .filter(tagging=> tagging.book_id === book.id).map(tagging => ( <li>{tagging.name}</li> )) : []
        return(
            <div className="book-show-page">
                <div className="col-1">
                <div className="book-info">
                    <div className="book-info-col-1">

                        <img src={book.coverUrl}/>
                        <BookshelfFormContainer/>
                        <div className='user-tag-on-book'>
                            <h3>My tags on <span>{book.title}</span></h3>
                            <ul>
                                {mytagonbook}
                            </ul>
                        </div>

                    </div>
                    <div className="book-info-col-2">
                        <div className="book-basic-info">
                            <h2>{book.title}</h2>
                            <Link to={`/writers/${book.writer_id}`}>< h3>by {book.writer}</h3></Link>
                             <div className='book-rating'>
                            <div className='score'>{Number.parseFloat(book.rate).toPrecision(2) || 0.0}</div>
                            <div className='rate-num'>
                                <RatingShow rate={book.rate} bookId={book.id}/>
                                <div className='num'>{ratnum} ratings</div>
                            </div>

                        </div>
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
                                    <li><span className='attr'>Number of Pages</span><span className='value'>{book.num_pages}</span></li>
                                    <li><span className='attr'>Published Time</span><span className='value'>{book.publish_at|| 'unknown'}</span></li>

                            <a onClick={this.toggleDetail}>...Less Detail</a>
                            </ul>
                        </div>
                    </div>


                </div>
                <div className='reviews'>
                    <h2>Reviews </h2>
                    <div className='rating-review-form'>
                        <div className='rating-nav'>My review of {book.title} </div>
                        <div className='rating-func'>
                        <RatingContainer/>
                        <Link to={`/books/${book.id}/reviews`}>Write Review</Link>
                        </div>
          
                    </div>
                    <ReviewIndex fetchReviews={this.props.fetchReviews} reviews={this.props.reviews} book={book}/>
                </div>
                </div>
                <div className='tags-container'>
                    <h2 className='tag-nav'>Add Tags</h2>
                    <TagForm createTag={this.props.createTag} createTagging={this.props.createTagging} book={book} userTags={this.props.userTags}/>
                </div>
            </div>
        )
    }
}

export default BookShow