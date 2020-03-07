import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { fetchTags } from "../../actions/tag_action"
import TagList from './tag_list'


const mapStateToProps = (state, ownProps) => 

{
   
    
    return ({
    userId: state.session.id,
        tags:state.entities.tags
})
}

const mapDispatchToProps = dispatch => ({
    fetchTags: () => dispatch(fetchTags()),
    

})


export default  connect(mapStateToProps, mapDispatchToProps)(TagList)