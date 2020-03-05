import React from 'react'


class RatingForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.state={
            user_id:this.props.userId,
            rate:this.props.rate,
            book_id:this.props.bookId
        }
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidUpdate(){
        
        const num=parseInt(this.state.rate)
        if(num!==this.props.rate){

            let stars = document.getElementsByClassName("stars")
            
            for (let i =0; i< 5; i++){
                stars[i].classList.remove("stared")
            }
            for (let i = (5-num); i < 5; i++){
                
                stars[i].classList.add("stared")
            }

        }
    }
    componentDidMount(){
        
       const num=parseInt(this.state.rate)

        let stars = document.getElementsByClassName("stars")
        

        for (let i = (5-num); i < 5; i++){
            
            stars[i].classList.add("stared")
        }
        // stars= stats.slice(0,num)
        
        // stars.forEach(star =>  (star.classList.add("stared")))
            
    
    }

    handleSubmit(e){
        e.preventDefault()

        this.setState({rate: e.target.getAttribute('value')}, () => this.props.rate ? this.props.updateReview(this.state): this.props.createReview(this.state.book_id, this.state))
    }

    render() {
        
        return (
            <div className='rating-form'>
                {/* <select onClick={this.handleSubmit} className='hidden-select-form'>

                    <option value="1" id='1-star'></option>
                    <option value="2" id='2-star'></option>
                    <option value="3" id='3-star'></option>
                    <option value="4" id='4-star'></option>
                    <option value="5" id='5-star'></option>
                </select> */}
                <div className='stars-container'>
                    <div className='stars' for='5-star' onClick={this.handleSubmit} value='5'></div>
                    <div className='stars' for='4-star' onClick={this.handleSubmit} value='4'></div>
                    <div className='stars' for='3-star' onClick={this.handleSubmit} value='3'></div>
                    <div className='stars' for='2-star' onClick={this.handleSubmit} value='2'></div>
                    <div className='stars' for='1-star' onClick={this.handleSubmit} value='1'></div>
                </div>
            </div>
        )
    }


}

export default RatingForm