import React from 'react'


class RatingShow extends React.Component {
    constructor(props){
        super(props)

    }

componentDidMount(){
    // 
    const rate = parseInt(this.props.rate)
    if ((this.props.rate - rate) < 0.7 && (this.props.rate-rate)>0.3) {
        // 
        const half = document.getElementById(`${this.props.bookId}-${rate +1}-stars`)
            if(half) half.classList.add("half-star")
    }
}

componentDidUpdate(prevProps) {
    if (this.props.bookId != prevProps.bookId) {
        const rate = parseInt(this.props.rate)
        if ((this.props.rate - rate) < 0.7 && (this.props.rate-rate)>0.3) {

            const half = document.getElementById(`${this.props.bookId}-${rate +1}-stars`)
                if(half) half.classList.add("half-star")
        }
    }
}


    render() {
        const rate = parseInt(this.props.rate)
        const star_list = [0,1,2,3,4].map(id=>(
            id >= (5- rate)? <div key={id} id={`${this.props.bookId}-${5-id}-stars`} className='stars-show stared' ></div> : <div key={id} className='stars-show' id={`${this.props.bookId}-${5-id}-stars`}></div>
            ))
            // if ((this.props.rate - rate) < 0.7 && (this.props.rate-rate)>0.3) {
            //     const half = document.getElementById(`${rate +1}-stars`)
            //         if(half) half.classList.add("half-star")
            // }

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