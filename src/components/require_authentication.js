
/*
    NOT IN USE. This way of requiring a user to authenticate was from React-Router v2/3
    USAGE (in App Component): <Route path="/resources" component={requireAuth(Resources)} />
*/


import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if(!this.props.authenticated){
                this.context.router.history.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated){
                this.context.router.history.push('/');
            }
        }

        render() {
            return <ComposedComponent { ...this.props } />
        }
    }

    function mapStateToProps(state){
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}