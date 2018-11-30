import React from "react";
//import PropTypes from 'prop-types';
import { View } from 'react-native';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <View> { this.props.children } </View>
    }
}
/*
PickRoleContainer.propTypes = {
    customer: PropTypes.bool,
    producer: PropTypes.bool
};
*/