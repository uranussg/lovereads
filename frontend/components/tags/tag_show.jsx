import React from 'react'
import {Link } from 'react-router-dom'

import BookIndexItem from '../books/book_index_item'
import TagListContainer from './tag_list_container'

class TagShow extends React.Component {
    constructor(props) {
        super(props)
        this.state={}

    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.tagName !== prevProps.match.params.tagName){
        this.props.fetchTag(this.props.match.params.tagName)
            
        }
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
            <div className="tag-showpage">
                <div className='tag-show-col-1'>
                    <div className="tag-nav">
                        <h2 className='tag-name'>
                        <span>Tag: </span> <span className="tag"> {tag}</span> 
                            </h2>
                    </div>
                    
                    <div className='book-list-container'>
                        <ul>
                            {bookList}
                        </ul>
                    </div>
                </div>
                <div className='tag-show-col-2'>
                    <div className='label-title'>
                        <h1>Hot Tags</h1>
                        <Link to='/tags'>
                            <div className='arrow-right'></div>
                            <span className="view-all">View All</span>
                        </Link>
                    </div>
                    <TagListContainer  />
                </div>
            </div>
        )
    }
}

export default TagShow