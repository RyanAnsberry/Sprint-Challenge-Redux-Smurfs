import React from 'react'
import {connect} from 'react-redux';
import { addSmurf } from '../actions'

class NewSmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    createNewSmurf = e => {
        e.preventDefault()

        const newSmurf = this.state
        this.props.addSmurf(newSmurf)
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

    render() {
        return (
            <div className="new-smurf-form">
                <form onSubmit={this.createNewSmurf}>
                    <h2>Enter new Smurf Data:</h2>
                    <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Smurf's Name" /><br />
                    <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" /><br />
                    <input name="height" value={this.state.height} onChange={this.handleChange} placeholder="Height" /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { addSmurf }
)(NewSmurfForm)