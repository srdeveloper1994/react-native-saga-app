import {Alert} from 'react-native';
let isAlertShown = false;

export function showAPICallError(objAlert) {
    if(!isAlertShown){
        isAlertShown = true;
        Alert.alert(objAlert.title,
            objAlert.message,
            [
                {text: objAlert.leftBtn, onPress: () => {isAlertShown = false;}},
            ],
            { cancelable: false }
        );
    }
}

export function showNoInternetAlert() {
    if(!isAlertShown){
        isAlertShown = true;
        Alert.alert('No wireless connection',
            'Connect to Wi-Fi or cellular to access data.',
            [
                {text: 'OK', onPress: () => {isAlertShown = false;}},
            ],
            { cancelable: false }
        );
    }
}

export function showServerNotReachable() {
    if(!isAlertShown){
        isAlertShown = true;
        Alert.alert('Internet unreachable',
            'Please check your internet connection and try again.',
            [
                {text: 'OK', onPress: () => {isAlertShown = false;}},
            ],
            { cancelable: false }
        );
    }
}