import React from 'react'
import {Link } from 'react-router-dom'
import BookIndexContainer from '../books/book_index_container'
import BookIndexItem from '../books/book_index_item'

class TagShelf extends React.Component {
    constructor(props) {
        super(props)
        this.state={books:this.props.books}
        this.handleUpdate= this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidUpdate(prevProps) {
        if(this.props.bookshelves!==prevProps.bookshelves){
        this.props.fetchBookshelves()
        }
    }
    componentDidMount(){
        
        this.props.fetchBooks({user_id: this.props.user_id})
        .then(()=>this.setState({books:this.props.books}))
        
    }

    handleUpdate(e){
        
        const curTaggings = this.props.taggings.filter(tagging=> tagging.name === e.target.value).map(tagging=> tagging.book_id)
        const tagBooks = this.props.books.filter(book=> curTaggings.includes(book.id))
        
        this.setState({books: tagBooks})
    }
    handleDelete(e) {
        e.stopPropagation()
        this.props.deleteBookFromShelf(this.props.bookshelves[e.target.getAttribute('value')].id)
    }

    render() {
        
        const {titles} = this.props
        const books = this.state.books
        const titlelist = titles.map(title=> (
        <li> <button onClick={this.handleUpdate} value={title}>{title}</button>  </li>
        ))
        // const titlelist = ['Want to Read', 'Reading', 'Read'].map(status=> (
        //     <li> <button onClick={this.handleUpdate} value={status}>{status}({titles[status]|| 0 })</button>  </li>
        //     ))
        const bookList = books.map(book => (
            <li>
                {/* <div className='button-container'>
                    <button onClick={this.handleDelete} className='remove-button' value={book.id}> </button>
                </div> */}
            <BookIndexItem book={book} key={book.id}/>
            </li>
        ))
        
        return (
            <div className="tagshelf-show">
                <div className="tagshelf-nav">
                    <h2 className='title'>My Tags</h2>
                </div>
                <div className="tagshelf-container">
                    <div className="tagshelf-sidebar">
                        <div className='tagshelf-titles'>
                            {/* <h3>My Tags</h3> */}
                            <ul>
                                {/* <li> <button onClick={this.handleUpdate}> All</button></li> */}
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

export default TagShelf