import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions';

const CatLady = ({ addCat }) => {
    const [nameInput, setNameInput] = useState('');


    const handleAddCat = () => {
        addCat(nameInput)
        setNameInput('');
    }

    return (
        <>
            <h1>The Cady Lady's Cats</h1>
            <div>list of cats</div>
            <div>
                <input
                onChange={e => setNameInput(e.target.value)}
                value={nameInput}
                placeholder='New Cat'
                />
                <button onClick={handleAddCat}>
                Add a Cat!
            </button>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state);
}

export default connect(
    mapStateToProps, // mapStateToProps
    { addCat } // mapDispachToProps
)(CatLady)