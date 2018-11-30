import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

import { IndexContainer } from './containers/index';

//import MainPage from './sign-in';
//import Categories from './categories'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.hasOwnProperty('token') ? props.token : null
        }
    }

    render() {
        return <IndexContainer>
            <View>
                <Button title='simple button desuu' />
                <RaisedTextButton title='touch me' />
                <TextButton title='do not touch me' disabled />
            </View>
        </IndexContainer>
    }
}

const mapStateToProps = (state) => {
    return {
        //role: state.userReducer['role'],
        token: state.userReducer['token']
    }
};

export default connect(mapStateToProps)(Index);

