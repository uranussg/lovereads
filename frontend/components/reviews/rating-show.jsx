import React from 'react'


class RatingShow extends React.Component {
    constructor(props){
        super(props)

    }

    componentDidMount(){
       const num=parseInt(this.props.rate)

        let stars = document.getElementsByClassName("stars")
        

        for (let i = (5-num); i < 5; i++){
            
            stars[i].classList.add("stared")
        }
            
    
    }



    render() {
        return (
            <div className='rating-show'>
                {/* <select onClick={this.handleSubmit} className='hidden-select-form'>

                    <option value="1" id='1-star'></option>
                    <option value="2" id='2-star'></option>
                    <option value="3" id='3-star'></option>
                    <option value="4" id='4-star'></option>
                    <option value="5" id='5-star'></option>
                </select> */}
                <div className='stars-container'>
                    <div className='stars' for='5-star'></div>
                    <div className='stars' for='4-star'></div>
                    <div className='stars' for='3-star'></div>
                    <div className='stars' for='2-star'></div>
                    <div className='stars' for='1-star'></div>
                </div>
            </div>
        )
    }


}

export default RatingShow