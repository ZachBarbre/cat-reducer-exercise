import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../redux/actions';

class AddCat extends Component {
    state = {
        petName: '',
        activity: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { petName, activity } = this.state;
        this.props.addCat({ name: petName, activity });
        this.setState({
            petName: '',
            activity: ''
        })
    }

    render() {
        const { petName, activity } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="petName" 
                placeholder="Cat's Name" 
                value={petName}
                onChange={this.handleChange}/>
                <select name="activity" value={activity} onChange={this.handleChange}>
                    <option defaultValue>Choose and Activity</option>
                    <option value="eating">Eating</option>
                    <option value="napping">Napping</option>
                    <option value="playing">Playing</option>
                </select>
                <button type="submit">Submit Cat</button>
            </form>
        )
    }
}

export default connect(
null,
{ addCat }
)(AddCat);