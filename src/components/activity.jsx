import React from 'react';
import { connect } from 'react-redux';
import { eat, play, nap } from '../redux/actions';

const Activity = ({ activity, eat, play, nap }) => (
    <>
        <h1>What is the cat doing?</h1>
        <p>The cat is {activity}</p>
        <button onClick={() => eat()}>EATING</button>
        <button onClick={() => play()}>PLAYING</button>
        <button onClick={() => nap()}>NAPPING</button>
    </>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

export default connect(
    mapStateToProps, // mapStateToProps
    { eat, play, nap } // mapDispachToProps
)(Activity);