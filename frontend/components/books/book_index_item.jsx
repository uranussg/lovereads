import React from 'react'
import {Link} from 'react-router-dom'
import RatingShow from '../reviews/rating-show'

class BookIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Link to={`/books/${this.props.book.id}`}>
                <li className="book-list-item">
                    <img src={this.props.book.coverUrl} alt=""/>
                    <div className='item-info'>
                        <p className="item-title">
                           {this.props.book.title}
                        </p>
                        <label className="item-rate">
                            <RatingShow rate={this.props.book.rate} bookId={this.props.book.id}/>
                        </label>
                        </div>
                </li>
            </Link>
        )
    }
}

export default BookIndexItem