/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Constant from '../../helper/themeHelper';
import PropTypes from 'prop-types';

export default class Users extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Users',
            headerRight: (
                <Button
                    onPress={navigation.getParam('onAddNewUser')}
                    title='Add new'
                    color='rgb(13,99,255)'
                />
            ),
        };
    };

    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.props.onRequestUSers();
        navigation.setParams({ onAddNewUser: this.onAddNewUser });
    }

    onAddNewUser = () => {
        const { navigation } = this.props;
        navigation.navigate('onAddNewUser');
    };

    renderItem = ({item, index}) => {
        const { navigation } = this.props;
        return(
            <TouchableOpacity style={styles.rowContainer}
                              onPress={()=>navigation.navigate('userDetails',{userDetails: item})}
                              key={index}>
                <Text style={styles.titleText}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    keyExtractor = (item) => {
        return item.id + '';
    };

    renderSeparator = ()=>{
        return <View style={{height:10}}/>;
    };

    renderEmpty = () => {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:15}}>
                    {'No data found'}
                </Text>
            </View>
        );
    };

    onRefresh = () => {
        this.props.onRequestUSers();
    };

    render() {
        const {userList, fetching} = this.props;
        return (
            <View style={styles.container}>
                <FlatList data={userList}
                          contentContainerStyle={{top:20}}
                          automaticallyAdjustContentInsets={false}
                          renderItem={this.renderItem}
                          keyExtractor={this.keyExtractor}
                          ItemSeparatorComponent={this.renderSeparator}
                          ListEmptyComponent={this.renderEmpty}
                          onRefresh={this.onRefresh}
                          refreshing={fetching}
                          ListFooterComponent={<View style={{ height: 50}}/>}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.appColor
    },
    titleText: {
        fontSize: Constant.fontSize.small,
        marginBottom: 20
    },
    rowContainer: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        borderRadius: 5,
        justifyContent:'center',
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});

Users.defaultProps = {
    userList: [],
    fetching: false,
};

Users.propTypes = {
    userList: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    onRequestUSers: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
};