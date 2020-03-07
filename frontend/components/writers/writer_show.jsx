import React from 'react'
import {Link} from 'react-router-dom'
import BookIndexItem from '../books/book_index_item';




class WriterShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps) {
  
        // 
        if(this.props.writer.id !== prevProps.writer.id) {
            
            this.props.fetchWriter(this.props.writer.id)
        }
    }

    componentDidMount(){
        
        
            this.props.fetchWriter(this.props.match.params.writerId)
        
    }


    render() {
        const {writer} = this.props
        const authoredBooks =this.props.books.map(book => (
            <BookIndexItem book={book} key={book.id}/>
        ))
        
        return(
            <div className="writer-show-page">
                <div className="writer-info">
                    <div className="writer-info-col-1">

                    <img src={window.demoCover}/>

                    </div>
                    <div className="writer-info-col-2">
                        <div className="writer-basic-info">
                            <h2>{writer.name}</h2>
                            <h3>Born: {writer.born}</h3>
                            <p>
                                {writer.description}
                            </p>
                        </div>
                        
                    </div>


                </div>
                <div className='authoered-books'>
                    <h2>{WriterShow.name}'s BOOKS' </h2>
                    <ul>
                        {authoredBooks}
                    </ul>
                </div>
            </div>
        )
    }
}

export default WriterShow