import React from 'react'
import {Link } from 'react-router-dom'
import BookIndexContainer from './book_index_container'
import BookIndexItem from './book_index_item'

class BookShelf extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
        this.handleUpdate= this.handleUpdate.bind(this)
    }

    componentDidMount(){
        
        this.props.fetchBookshelves()
    }

    handleUpdate(e){
        
        this.props.fetchBookshelf(e.target.value)
    }

    render() {
        
        const {titles, books} = this.props
        const titlelist = titles.map(title=> (
        <li> <button onClick={this.handleUpdate} value={title}>{title}</button>  </li>
        ))
        const bookList = books.map(book => (
            <BookIndexItem book={book} key={book.id}/>
        ))
        
        return (
            <div className="shelf-show">
                <div className="shelf-nav">
                    <h2 className='title'>My Books</h2>
                </div>
                <div className="shelf-container">
                    <div className="shelf-sidebar">
                        <div className='shelf-titles'>
                            <h3>Bookshelves</h3>
                            <ul>
                                {titlelist}
                            </ul>
                        </div>
                    </div>
                    <div className='book-list-container'>
                        <ul>
                            {bookList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf