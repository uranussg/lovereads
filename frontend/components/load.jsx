import React from 'react';
import { connect } from 'react-redux';


function Load({ load }) {
    debugger

    if (!load) {
        return null;
    }
    return (
        <div className="load-background">
            <div className="load-child" onClick={e => e.stopPropagation()}>
                <p>Loading</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        load: state.ui.load
    };
};

export default connect(mapStateToProps)(Load);
