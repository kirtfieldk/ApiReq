import React from 'react';
import { connect } from 'react-redux';
// import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    //Calls the action
    // We do not want this to call its own data now that fetchUserAndPost has been impllemented
    // componentDidMount(){
    //     //The prop userId is being pass down from postList
    //     this.props.fetchUser(this.props.userId);
    // }
    render(){
        const {user} = this.props;
        if(!user){
            return <div>No user Found</div>;
        }
        return <div className = 'header'>{user.name}</div>;
    };
};
//The ownProps argument are the states that will eventually be passed into the component
const mapStateToProps = (state, ownProps) =>{
    return {user: state.user.find((users) =>users.id === ownProps.userId )};
}


export default connect(mapStateToProps )(UserHeader);