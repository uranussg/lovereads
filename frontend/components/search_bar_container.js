import {connect} from 'react-redux'

import SearchBar from './search_bar'
import { liveSearch, search} from '../actions/search_action'

const mapStateToProp = (state) => {
    
    return {
        searchResults: Object.values(state.entities.searchResults)
    }
}

const mapDispatchToProps = dispatch => ({
    liveSearch: body => dispatch(liveSearch(body)),
    search: body => dispatch(search(body))
})

export default connect(mapStateToProp, mapDispatchToProps)(SearchBar)