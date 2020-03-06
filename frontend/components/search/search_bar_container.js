import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import SearchBar from './search_bar'
import { liveSearch, search, clearSearch} from '../../actions/search_action'

const mapStateToProp = (state, ownProps) => {
    
    return {
        // currentUrl: ownProps.match.params.url,
        searchResults: Object.values(state.entities.searchResults)
    }
}

const mapDispatchToProps = dispatch => ({
    liveSearch: body => dispatch(liveSearch(body)),
    search: body => dispatch(search(body)),
    clearSearch: () => dispatch(clearSearch())
})

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(SearchBar))