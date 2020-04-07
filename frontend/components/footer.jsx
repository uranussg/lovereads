import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from "react-router-dom"


class Footer extends React.Component {
    constructor(props) {
        super(props)

    }

    
  render () {

 
        return (
            <footer>
                <div className='footer-container'>
                <div className='footer-col-1'>
                    <ul className='contact-info'>
                        <li className="people">
                            <div>People</div>
                            <ul>
                                <li>About me</li>
                                <li>Careers</li>
                                <li>Privacy</li>
                                <li>Help</li>
                            </ul>
                        </li>
                        
                        <li  className='connect'>
                            <div>Connect</div>
                            <ul className='icons'>
                                {/* <li><a></a></li> */}
                                <a href='https://github.com/uranussg' className='github'><span ></span></a>
                                <a herf='https://www.linkedin.com/in/songge-sun-674b6a138/'><span>in</span></a>
                                 <a><span> f</span></a>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='footer-col-2'>
                    <div className='icons'>

                    </div>
                    <div className='copyright'>
                    © 2020 Lovereads
                    </div>
                </div>
                </div>
            </footer>
        
        )
    }
    
    
}

export default Footer