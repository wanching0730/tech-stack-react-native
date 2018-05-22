import React, { Component } from 'react';
import { Text } from 'react-native';
// 'connect' is to call Action Creator
// it is to access Redux from React
import { connect } from 'react-redux';
import { CardItem } from './common';
// import all functions from one file (actions/index.js)
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;

        // this will see the actions in action creator
        console.log(this.props);

        return (
            <CardItem>
                <Text style={titleStyle}>{this.props.library.title}</Text>
            </CardItem>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

// first argument is MapStateToProps
// this 'connect' method does 2 things:
// 1st: automatically dispatch all actions in action creator to reducers
// 2nd: pass all actions to our component as Props
export default connect(null, actions)(ListItem);