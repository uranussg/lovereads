import React from 'react';
import { connect } from 'react-redux';


function Load({ load }) {
    

    if (!load) {
        return null;
    }
    return (
        <div className="load-background">
            <div className="load" onClick={e => e.stopPropagation()}>
                <p>Loading</p>
                {/* <img className='load-img' src={window.load} /> */}
                <ul className='load-dots'>
                    <li id='load-dot1'></li>
                    <li id='load-dot2'></li>
                    <li id='load-dot3'></li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        load: state.ui.load
    };
};

export default connect(mapStateToProps)(Load);
