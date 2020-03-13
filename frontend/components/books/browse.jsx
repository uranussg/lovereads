import React from 'react'
import BookIndexItem from './book_index_item'


class Browse extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.props.browseBooks(this.props.type)
        }
    }
    componentDidMount() {
        
         {this.props.browseBooks(this.props.type)}
    }

    render() {
        const titles = {
            new: "New Books",
            rate: "Top Rated",
            recommendation: "Recommendation for You"
        }
        const bookList = this.props.books.map(book => (
            <BookIndexItem book={book} key={book.id}/>
        ) 
        )

        return (
            <div className='browse-page'>
            <div className="book-list-container">
                <h2>{titles[this.props.type]}</h2>
                <ul>
                    {bookList}
                </ul>

            </div>
            </div>
        )
    }
}

export default Browse