import React from 'react'
import {Link} from 'react-router-dom'
import BookshelfFormContainer from './bookshelf_form_container'


class BookShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){

            this.props.fetchBook(this.props.match.params.bookId)
        
    }

    render() {
        const {book} = this.props

        return(
            <div className="book-show-page">
                <div className="book-info">
                    <div className="book-info-col-1">

                    <img src="" alt=""/>
                    <BookshelfFormContainer/>

                    </div>
                    <div className="book-info-col-2">
                    <h2>{book.title}</h2>
                    <h3>by {book.writer_id}</h3>
                    <p>
                        {book.description}
                    </p>
                    </div>


                </div>
            </div>
        )
    }
}

export default BookShow