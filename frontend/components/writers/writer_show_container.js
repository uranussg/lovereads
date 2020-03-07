import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { fetchWriter } from "../../actions/writer_action"
import { fetchBook} from '../../actions/book_action'
import WriterShow from './writer_show'


const mapStateToProps = (state, ownProps) => 

{
   
    
    return ({
    userId: state.session.id,
    writer:state.entities.writers[ownProps.match.params.writerId] || {},
    books: Object.values(state.entities.books)
})
}

const mapDispatchToProps = dispatch => ({
    fetchWriter: (writerId) => dispatch(fetchWriter(writerId)),
    fetchBook: bookId => dispatch(fetchBook(bookId))
    

})


export default  connect(mapStateToProps, mapDispatchToProps)(WriterShow)