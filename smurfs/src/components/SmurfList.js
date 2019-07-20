import React from 'react'
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';

class SmurfList extends React.Component{
    componentDidMount(){
        this.props.getSmurfs()
    }
    render(){
        return (
            <div className="smurf-list">
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className='smurf-card' key={smurf.id}>
                            <h2>{smurf.name}</h2>
                            <p>age: {smurf.age}</p>
                            <p>height: {smurf.height}</p>
                        </div>  
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
return {
smurfs: state.smurfs
}
}

export default connect (
mapStateToProps,
{ getSmurfs }
)(SmurfList)
