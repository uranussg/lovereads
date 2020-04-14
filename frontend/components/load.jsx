import React from 'react';
import { connect } from 'react-redux';


function Load({ load }) {

    if (!load) {
        return null;
    }
    return (
        <div className="load-background">
            <div className="load-child" onClick={e => e.stopPropagation()}>

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
