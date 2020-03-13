import React from 'react'
import { Link } from 'react-router-dom'
import BookIndexItem from '../books/book_index_item'


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body:this.props.body
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleSubmit(e) {
        // e.preventDefault()
        
        this.props.search(this.state.body)
        .then(()=> this.props.history.push(`/search/${this.state.body}`))
    }
    handleChange(e) {
        this.setState({body: e.target.value}, () => this.props.liveSearch(this.state.body))
        

    }

    // componentDidMount() {
    //     document.addEventListener("click", (e)=>this.handleClick)

    // }
    // componentWillUnmount() {
    //     document.removeEventListener("click", (e)=>this.handleClick)
    // }

    handleClick(e) {
        // if(!this.wrapperRef.current.contains(e.target)){
        //     this.props.clearSearch()
        // }
        this.setState({body:""})
        this.props.clearSearch()
    }

    // componentDidMount() {
        
    //     this.props.clearSearch()
    // }

    // componentDidUpdate() {
    //     
    //     if(this.props.body !== this.state.body) {
    //         this.props.clearSearch()
    //     }
    // }
    setWrapperRef(node) {
        this.wrapperRef = node;
      }
  

    render() {

        const searchList = this.props.searchResults.slice(0, 5).map(book => (
            <BookIndexItem book={book} key={book.id}/>
            ) 
            )

   

        return (
            <div className="live-search">
                <div className='search-bar' ref={this.setWrapperRef}>
                    <input type="text" value={this.state.body}
                    onChange={this.handleChange}/>
                    {/* <Link to={`/search/${this.state.body}`}><div onClick={this.handleSubmit}></div></Link> */}
                    <div onClick={this.handleSubmit}></div>
                </div>
                <div className="search-list-container" onClick={this.handleClick}>
                    <ul>
                        {searchList}
                    </ul>

                </div>
            </div>
        )
    
    }
}

export default SearchBar