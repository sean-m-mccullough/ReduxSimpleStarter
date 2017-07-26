import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Authenticated = ({authenticated, component: ComposedComponent, ...rest}) => {
    return ( <Route {...rest} render={ props => {
        return authenticated ?
        ( <ComposedComponent {...props} /> ) :  
        ( <Redirect to="/" /> )
    }} /> );
};

function mapStateToProps(state){
    return { authenticated: state.authenticated };
}

export default connect(mapStateToProps)(Authenticated);