import React from 'react';
import { connect } from 'react-redux';
import { setActivity } from '../redux/actions';

const CatLady = ({ cats, setActivity }) => {

    
    const catsArray = Object.keys(cats);
    console.log(catsArray)
  

    return (
        <>
            <h1>The Cady Lady's Cats</h1>
            <ul>
            {catsArray.map((catId, index) => {
                return(
                <li keys={`cat=${index}`}>{cats[catId].name} is {cats[catId].activity}
                <button onClick={() => setActivity({id: catId, activity: 'eating'})}>EATING</button>
                <button onClick={() => setActivity({id: catId, activity: 'playing'})}>PLAYING</button>
                <button onClick={() => setActivity({id: catId, activity: 'napping'})}>NAPPING</button>
                </li>
                )
                })}
            </ul>
            
        </>
    )
}

const mapStateToProps = state => {
    const { cats } = state;
    return cats;
}

export default connect(
    mapStateToProps, // mapStateToProps
    { setActivity } // mapDispachToProps
)(CatLady)