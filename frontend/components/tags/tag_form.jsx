import React from 'react'
import {Link} from 'react-router-dom'


class TagForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleUpdate =this.handleUpdate.bind(this)
        // this.toggleClass = this.toggleClass.bind(this)
        this.addTagging = this.addTagging.bind(this)
    }

    // componentDidUpdate() {
    //     if(this.props.state)
    // }

    addTagging(e) {
        const tag ={
            id:e.target.value
        }
        
        this.props.createTagging(this.props.book.id, tag)
    }

    handleUpdate(e){
        
        this.setState({name:e.target.value})
    }

    handleSubmit(e){
        this.props.createTag(this.props.book.id, this.state).then(()=>this.setState({name:""}))
    }
    // toggleClass(e) {
    //     const dropdown =document.querySelectorAll('.shelf-drop-down')[0]
    //     dropdown.classList.toggle("show")
    // }
    render() {
        const {book, userTags} = this.props
        let booktags
        
        
        booktags = book.tags? Object.keys(book.tags).map(tagkey => (
        
            <li>
                {/* <Link to={`tags/${book.tags[tagkey][0]}`}> */}
                <div id={`${tagkey}book`} value={tagkey}>{book.tags[tagkey][0]}({book.tags[tagkey][1]})</div>
                {/* </Link> */}
   
            <button for={`${tagkey}book`} onClick={this.addTagging} value={tagkey} className='add-tag-button'></button>
        </li>
        )) : []

        const mytags = Object.keys(this.props.userTags).map(tagkey => (
            <li>
                {/* <Link to={`tags/${book.tags[tagkey][0]}`}> */}
                <span id={`${tagkey}user`} value={tagkey}>{userTags[tagkey][0]}({userTags[tagkey][1]})</span>
                {/* </Link> */}
                <button for={`${tagkey}user`} onClick={this.addTagging} value={tagkey} className='add-tag-button'></button>
            </li>
            ))
        return (
        <div className="tags">
            <div className="book-tags">
                 <h2>Tags on {book.title}</h2>
                <ul>
                    {booktags}
                </ul>
            </div>
            <div className='user-tags'>
                <h2>Tags I often use</h2>
                <ul>
                    {mytags}
                </ul>
            </div>


            <div>
            <form className="add-new-tag" onSubmit={this.handleSubmit}>
                <div className='title'>New Tag</div>
                <div className='input'>
                    <input type="text" value={this.state.title}
                    onChange={this.handleUpdate}/>
                    <button type="submit"></button>
                </div>
            </form>
        </div>                   

        </div>
        )   
    }
}

export default TagForm