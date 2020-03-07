import React from 'react'
import {Link } from 'react-router-dom'
import BookIndexContainer from './book_index_container'
import BookIndexItem from './book_index_item'

class BookShelf extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
        this.handleUpdate= this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidUpdate(prevProps) {
        if(this.props.bookshelves!==prevProps.bookshelves){
        this.props.fetchBookshelves()
        }
    }
    componentDidMount(){
        
        this.props.fetchBookshelves()
    }

    handleUpdate(e){
        ['Want to Read', 'Reading', 'Read'].includes(e.target.value)?
        this.props.fetchBookshelf(e.target.value) : this.props.fetchBookshelves()
    }
    handleDelete(e) {
        
        this.props.deleteBookFromShelf(this.props.bookshelves[e.target.getAttribute('value')].id)
    }

    render() {
        
        const {titles, books} = this.props
        // const titlelist = titles.map(title=> (
        // <li> <button onClick={this.handleUpdate} value={title[0]}>{title[0]}({title[1]})</button>  </li>
        // ))
        const titlelist = ['Want to Read', 'Reading', 'Read'].map(status=> (
            <li> <button onClick={this.handleUpdate} value={status}>{status}({titles[status]|| 0 })</button>  </li>
            ))
        const bookList = books.map(book => (
            <li>
            <BookIndexItem book={book} key={book.id}/>
            <button onClick={this.handleDelete} value={book.id}>Remove from Shelf</button></li>
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
                                <li> <button onClick={this.handleUpdate}> All</button></li>
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