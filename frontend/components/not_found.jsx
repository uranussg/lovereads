import React from 'react'

const NotFound = (props) => {

    if (props.match.url === '/signup' || props.match.url ==='/login'){ 
        return null
    }

    return( 
        <div className='not-found'>
        <div>
        <h1>There's no Books Here...</h1>
        </div>
        </div>
        )
          

}
export default NotFound