import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setName, setActivity } from '../redux/actions';

const Activity = ({ name, activity, setName, setActivity }) => {
    
    return(
    <>
        <p>{name} is {activity}</p>
        <button onClick={() => setActivity('eating')}>EATING</button>
        <button onClick={() => setActivity('playing')}>PLAYING</button>
        <button onClick={() => setActivity('napping')}>NAPPING</button>
        <hr />
    </>
    )
}


const mapStateToProps = state => {
    const { name, activity } = state
    console.log(name, activity);
    return { name, activity }


}

export default connect(
    mapStateToProps, // mapStateToProps
    { setName, setActivity } // mapDispachToProps
)(Activity);