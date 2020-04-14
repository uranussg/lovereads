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
                                <li><a href="https://uranussg.github.io/portfolio/">About me</a></li>
                                <li><a href="https://www.linkedin.com/in/songge-sun-674b6a138/">Careers</a></li>
                                {/* <li>Privacy</li>
                                <li>Help</li> */}
                            </ul>
                        </li>
                        
                        <li  className='connect'>
                            <div>Connect</div>
                            <ul className='icons'>
                                {/* <li><a></a></li> */}
                                <a href='https://github.com/uranussg' className='github'><span></span></a>
                                <a href='https://www.linkedin.com/in/songge-sun-674b6a138/' className='linkedin'><span></span></a>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='footer-col-2'>
                    <div className='icons'>

                    </div>
                    <div className='copyright'>
                    © 2020 Lovereads
                    <br/>
                    <br/>
                      Songge Sun 
                    </div>
                </div>
                </div>
            </footer>
        
        )
    }
    
    
}

export default Footer