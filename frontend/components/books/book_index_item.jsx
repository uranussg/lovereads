import React from 'react'
import {Link} from 'react-router-dom'

class BookIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <Link to={`books/${this.props.book.id}`}>
                <li className="book-list-item">
                    <label>{this.props.book.title}</label>
                </li>
            </Link>
        )
    }
}

export default BookIndexItem