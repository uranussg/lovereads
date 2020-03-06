import React from 'react'
import RatingContainer from './rating_container'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = 
        
       {
        user_id:this.props.userId,

        book_id:this.props.bookId,

        body:this.props.review.body || ""
        } 
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        
        if (!this.props.book) {
            this.props.fetchBook(this.props.match.params.bookId)
        }
    }

    handleSubmit(e){
        
        e.preventDefault()
        
        (this.props.rate ? this.props.updateReview(this.state).then( this.props.history.push(`/books/${this.props.bookId}`)): this.props.createReview(this.state.book_id,this.state).then( this.props.history.push(`/books/${this.props.bookId}`)))
        // .then( this.props.history.push(`/books/${this.props.bookId}`))
        // this.props.history.push(`/books/${this.props.bookId}`)
        
        
    }

    handleUpdate() {
        return e => {
            e.preventDefault()
            this.setState({body: e.target.value})
            
        }
    }

    render() {
        
        let {book} =this.props 
        book = book || {}
        // debugger
        return (
            <div className="review-form">
                <div className='review-book'>
                    <div className='review-book-img'>
                        <img src={window.demoCover}></img>
                    </div>
                    <div className='review-book-info'>
                         <div className='title'>{book.title}</div>
                         <div className='author'>by {book.writer}</div>
                    </div>
                </div>

                <form>
                    <label className='rating'>
                        <span className="my-rating">My rating:</span>
                        <RatingContainer />

                    </label>
                    <label className='review-body'>

                        <textarea type="text" cols="30" rows="10"
                        value={this.state.body}
                        onChange={this.handleUpdate()}></textarea>
                    </label>
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm