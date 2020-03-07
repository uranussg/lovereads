import React from 'react'
import {Link } from 'react-router-dom'
import BookIndexContainer from './book_index_container'
import BookIndexItem from './book_index_item'

class TagShow extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
        this.handleUpdate= this.handleUpdate.bind(this)
    }

    componentDidMount(){
        
        this.props.fetchTag(this.props.match.params.tagName)
    }



    render() {
        const tag = this.props.match.params.tagName
        const {books} = this.props

        const bookList = books.map(book => (
            <BookIndexItem book={book} key={book.id}/>
        ))
        
        return (
            <div className="tag-show">
                <div className="tag-nav">
                    <h2 className='tag-name'>{tag}</h2>
                </div>

                    
                    <div className='book-list-container'>
                        <ul>
                            {bookList}
                        </ul>
                    </div>
            </div>
        )
    }
}

export default TagShow