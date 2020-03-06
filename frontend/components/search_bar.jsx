import React from 'react'
import { Link } from 'react-router-dom'
import BookIndexItem from './books/book_index_item'


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body:""
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.search(this.state.body)
    }
    handleChange(e) {
        this.setState({body: e.target.value})
        this.props.liveSearch(e.target.value)

    }
  

    render() {
        const searchList = this.props.searchResults.map(book => (
            <BookIndexItem book={book} key={book.id}/>
            ) 
            )
            

        return (
            <div className="live-search">
                <div className='search-bar'>
                    <input type="text" value={this.state.body}
                    onChange={this.handleChange}/>
                    <Link to={`/search/${this.state.body}`}><div onClick={this.handleSubmit}>search!</div></Link>
                </div>
            <div className="book-list-container">
                <ul>
                    {searchList}
                </ul>

            </div>
            </div>
        )
    
    }
}

export default SearchBar