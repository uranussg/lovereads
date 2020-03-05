import React from 'react'
import RatingContainer from './rating_container'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: 5,
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        
        this.props.rate ? this.props.createReview(this.state): this.props.updateReview(this.state)
        .then(()=> this.setState({
            rate: 0,
            body: ""
        }))
        
        this.props.history.push(`/benches/${this.props.benchId}`)
    }

    handleUpdate(type) {
        return e => {
            e.preventDefault()
            this.setState({[type]: e.target.value})
            
        }
    }

    render() {
        const {book} =this.props
        return (
            <div className="review-form">
                <div className='review-book'>
                    <div className='review-book-img'>
                        <img src="assets/demo_book_cover.jpg"></img>
                    </div>
                    <div className='review-book-info'>
                         <div>{book.title}</div>
                         <div>{book.writer_id}</div>
                    </div>
                </div>

                <form>
                    <label className='rating'>
                        <RatingContainer />

                    </label>
                    <label className='review-body'>

                        <textarea type="text" value={this.state.body}
                        onChange={this.handleUpdate("body")}></textarea>
                    </label>
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm