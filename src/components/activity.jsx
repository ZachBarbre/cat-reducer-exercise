import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setName, setActivity } from '../redux/actions';

const Activity = ({ name, activity, setName, setActivity }) => {
    const [nameInput, setNameInput] = useState('');

    const handleNameChage = () => {
        setName(nameInput)
        setNameInput('');
    }
    
    return(
    <>
        <h1>What is the cat doing?</h1>
        <p>{name.name} is {activity.activity}</p>
        <button onClick={() => setActivity('eating')}>EATING</button>
        <button onClick={() => setActivity('playing')}>PLAYING</button>
        <button onClick={() => setActivity('napping')}>NAPPING</button>
        <hr />
        <div>
            <input
            onChange={e => setNameInput(e.target.value)}
            value={nameInput}
            placeholder='New Cat'
            />
            <button onClick={handleNameChage}>
            Change Cat Name
            </button>
        </div>
    </>
    )
}


const mapStateToProps = state => {
    const activity = state.activityReducer;
    const name = state.nameReducer;
    console.log(name, activity);
    return { name:name, activity: activity }


}

export default connect(
    mapStateToProps, // mapStateToProps
    { setName, setActivity } // mapDispachToProps
)(Activity);