import React from 'react'


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
        <li><button onClick={this.addTagging} value={tagkey}>{book.tags[tagkey][0]}</button><span>({book.tags[tagkey][1]})</span></li>
        )) : []

        const mytags = Object.keys(this.props.userTags).map(tagkey => (
            <li><button onClick={this.addTagging} value={tagkey}>{userTags[tagkey][0]}</button><span>({userTags[tagkey][1]})</span></li>
            ))
        return (
        <div className="tags">
            <div className="book-tags">
                <h2>book's tags</h2>
                <ul>
                    {booktags}
                </ul>
            </div>
            <div className='user-tags'>
                <h2>my tags</h2>
                <ul>
                    {mytags}
                </ul>
            </div>


            <div>
            <form className="add-new-tag" onSubmit={this.handleSubmit}>
                <button type="submit">New Tag</button>
                <input type="text" value={this.state.title}
            onChange={this.handleUpdate}/>
            </form>
        </div>                   

        </div>
        )   
    }
}

export default TagForm