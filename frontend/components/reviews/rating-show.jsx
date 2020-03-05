import React from 'react'


class RatingShow extends React.Component {
    constructor(props){
        super(props)

    }





    render() {
        const rate = parseInt(this.props.rate)
        const star_list = [0,1,2,3,4].map(id=>(
            id >= (5- rate)? <div className='stars-show stared' for='5-star'></div> : <div className='stars-show' for='5-star'></div>
            ))

        return (


                <div className='stars-container'>
                    {/* <div className='stars-show' for='5-star'></div>
                    <div className='stars-show' for='4-star'></div>
                    <div className='stars-show' for='3-star'></div>
                    <div className='stars-show' for='2-star'></div>
                    <div className='stars-show' for='1-star'></div> */}
                {star_list}
                </div>

        )
    }


}

export default RatingShow