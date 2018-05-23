import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// 'connect' is to call Action Creator
// it is to access Redux from React
import { connect } from 'react-redux';
import { CardItem } from './common';
// import all functions from one file (actions/index.js)
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        // this will see the actions in action creator
       // console.log(this.props);

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardItem>
                        <Text style={titleStyle}>{title}</Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    // return { expanded: expanded };
    return { expanded };
}

// first argument is mapStateToProps
// this 'connect' method does 2 things:
// 1st: automatically dispatch all actions in action creator to reducers
// 2nd: pass all actions to our component as Props
// current props is selecrLibrary action
export default connect(mapStateToProps, actions)(ListItem);