import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class Home extends React.Component {
    render () {
        var {counter, dispatch} = this.props;

        console.log(counter);

        return (
            <div>
                <button onClick={
                    () => {dispatch(actions.addCounter());}
                }>
                    Click
                </button>
                <p>{counter}</p>
            </div>
        );
    }
}


export default connect(
    (state) => {
        return state;
    }
)(Home);