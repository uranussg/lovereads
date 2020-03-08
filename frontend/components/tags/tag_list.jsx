import React from 'react'
import {Link} from 'react-router-dom'
import BookIndexItem from '../books/book_index_item';




class TagList extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidUpdate(prevProps) {
  
    //     // 
    //     if(this.props.writer.id !== prevProps.writer.id) {
            
    //         this.props.fetchWriter(this.props.writer.id)
    //     }
    // }

    componentDidMount(){
        
        
            this.props.fetchTags()
        
    }


    render() {
        
        const tagList =this.props.tags.map(tag => (
        <li key={tag.id}>
            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
            </li>
        ))
        
        return(
            <div className="tag-list">
    <ul>{tagList}</ul>
            </div>
        )
    }
}

export default TagList