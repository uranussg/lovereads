import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import {fetchComments, deleteComments, createComment} from '../../utils/comment_util'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments:{},
            new:""
        }
        this.handleCreate = this.handleCreate.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount(){
        
        fetchComments(this.props.reviewId).then(comments=> this.setState({comments:comments}))
        
    }

    handleUpdate(e) {
        this.setState({new:e.target.value})
    }

    handleCreate(e) {
        
        createComment(this.props.reviewId, this.state.new).then(comment => this.setState({comments:Object.assign(this.state.comments, {[comment.id]: comment})}))
    }

    render() {
    
        
        const commentList =
         Object.values(this.state.comments).map( comment => (
            <li className='comment-item'> 
            <div>{comment.user.username}</div>
            <div>{comment.body}</div>
            </li>
            ))
            
            
        return(
            <div className="comment-container"> 
                <label>

                    <ul className='comment-list'>
                        {commentList}
                        <form onSubmit={this.handleCreate}>
                        <input type="text" onChange={this.handleUpdate} value={this.state.new}/>
                        <button type='submit'>write comment</button>
                        </form>
                    </ul>
                </label>

            </div>
        ) 
    }
}

export default  withRouter(CommentIndex)