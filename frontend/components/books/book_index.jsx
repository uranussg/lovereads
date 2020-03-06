import React from 'react'
import BookIndexItem from './book_index_item'

class BookIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        if (this.props.books.length === 0)
         {this.props.fetchBooks()}
    }

    render() {
        const bookList = this.props.books.map(book => (
            <BookIndexItem book={book} key={book.id}/>
        ) 
        )

        return (
            <div className="book-list-container">
                <h2>New Books</h2>
                <ul>
                    {bookList}
                </ul>

            </div>
        )
    }
}

export default BookIndex