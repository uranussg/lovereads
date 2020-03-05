import React from 'react'


class BookshelfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            title:"",
            book_id:this.props.bookId,
            user_id:this.props.userId 
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleUpdate =this.handleUpdate.bind(this)
        this.toggleClass = this.toggleClass.bind(this)
    }

    handleSubmit(e){
        debugger
        this.setState({title:e.target.innerText},
            ()=> (this.props.read? this.props.editBookshelf(this.props.bookshelf.id, this.state)
            .then((e)=>this.toggleClass(e)):
            this.props.createBookshelf(this.state)
            .then((e)=>this.toggleClass(e))
            ))
        
    }

    handleUpdate(e){
        // debugger
        this.setState({title:e.target.value})
    }

    toggleClass(e) {
        const dropdown =document.querySelectorAll('.shelf-drop-down')[0]
        dropdown.classList.toggle("show")
    }
    render() {
        // debugger
        return (
        <div className="shelf-form">
            <div className='status-bar'>
                {this.props.read? 
                <div className="added">
                    <div className="check-mark"><i className="fas fa-check-circle"></i></div>
                    <p>{this.props.read}</p>
                    </div>:
                    <div className="unadded"> <p> Want To Read</p></div>
                }
            </div >
            <div className="add-shelf">
                <div className='shelf-trigger'
                onClick={this.toggleClass}>
                    <div className="arrow-down"></div>
                </div>
                <ul className='shelf-drop-down'>
                    <li>
                        <div value="Want to Read"
                        onClick={this.handleSubmit}>Want to Read</div>
                    </li>
                    <li>
                        <div value="Reading"
                        onClick={this.handleSubmit}>Reading</div>
                    </li>
                    <li>
                        <div value="Read"
                        onClick={this.handleSubmit}>Read</div>
                    </li>
                    <li>
                        <form className="add-new-shelf" onSubmit={this.handleSubmit}>
                            <button type="submit">Add Shelf</button>
                            <input type="text" value={this.state.title}
                        onChange={this.handleUpdate}/>
                        </form>
                    </li>                   
                </ul>
            </div>
        </div>
        )   
    }
}

export default BookshelfForm