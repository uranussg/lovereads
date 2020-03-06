import {connect} from 'react-redux'

import SearchShow from './search_show'

const mapStateToProp = (state, ownProps) => {
    debugger
    return {
        body: ownProps.match.params.body,
        // searchResults: Object.values(state.entities.searchResults)
        books: Object.values(state.entities.books)
    }
}

const mapDispatchToProps = dispatch => ({
    search: body => dispatch(search(body)),
    clearSearch: () => dispatch(clearSearch())
})

export default connect(mapStateToProp, mapDispatchToProps)(SearchShow)