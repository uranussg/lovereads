import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import SearchShow from './_search_show'
import BookIndex from '../books/book_index'

const mapStateToProp = (state, ownProps) => {
    
    return {
        body: ownProps.match.params.body,
        // searchResults: Object.values(state.entities.searchResults)
        books: Object.values(state.entities.books)
    }
}

const mapDispatchToProps = dispatch => ({
    // fetchBookIndex: () => dispatch(search(ownProps.math.params.body)),
    fetchBookIndex: () => {},
    search: body => dispatch(search(body)),
    clearSearch: () => dispatch(clearSearch())
})

const SearchShowContainer = withRouter(connect(mapStateToProp, mapDispatchToProps)(BookIndex))



import React from 'react'
import { Link } from 'react-router-dom'



class SearchPage extends React.Component {
    constructor(props) {
        super(props)
    
    }

    render() {
        return (
        <div className="search-page"> 
        <h3 className="search-subnav">Search Result</h3>
        <SearchShowContainer />
        </div>
        )
    }
}

export default SearchPage