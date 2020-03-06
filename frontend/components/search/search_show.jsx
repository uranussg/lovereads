

import React from 'react'
import { Link } from 'react-router-dom'
import BookIndexItem from '../books/book_index_item'


class SearchShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body:this.props.match.params.body
        }

    }
    componentDidUpdate() {
        if (this.props.body !== this.props.match.params.body)
         {this.props.fetchBooks()}
    }

    render() {
        const bookList = this.props.books.map(book => (
            <BookIndexItem book={book} key={book.id}/>
        ) 
        )

        return (
            <div className="book-list-container">
                <h2>Search Results</h2>
                <ul>
                    {bookList}
                </ul>

            </div>
        )
    }
}

export default SearchShow