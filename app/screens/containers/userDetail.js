/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import Constant from '../../helper/themeHelper';
import PropTypes from 'prop-types';

export default class UserDetails extends Component {

    static navigationOptions = ()  => {
        return {
            title: 'User Details',
        };
    };

    constructor(props){
        super(props);
        this.state={
            userDetails: props.navigation.state.params.userDetails
        };
    }

    onLinkPress = () => {
        const {website} = this.state.userDetails;
        Linking.canOpenURL(website).then(supported => {
            if (supported) {
                Linking.openURL(website);
            }
        });
    };

    render() {
        const { name, email, website } = this.state.userDetails;
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {name}
                </Text>
                <Text style={styles.titleText}>
                    {email}
                </Text>
                <Text style={styles.linkText} onPress={this.onLinkPress}>
                    {website}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.appColor,
        padding: 10
    },
    titleText: {
        fontSize: Constant.fontSize.medium,
        alignSelf: 'center',
        marginBottom: 10
    },
    linkText:{
        fontSize: Constant.fontSize.small,
        alignSelf: 'center',
        color: Constant.blueColor
    }
});

UserDetails.propTypes = {
    navigation: PropTypes.object.isRequired
};