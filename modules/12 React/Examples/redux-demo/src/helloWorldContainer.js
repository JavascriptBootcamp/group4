import { connect } from 'react-redux';
import HelloWorldComponent from "./helloWorld";

const mapStateToProps = state => ({
    userName: state.userProfileReducer.firstname
});

const mapDispatchToProps = dispatch => ({
    
});

const HelloWorldContainer = connect(mapStateToProps, mapDispatchToProps)(HelloWorldComponent);

export default HelloWorldContainer;