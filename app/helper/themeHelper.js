import { Platform, Dimensions, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

module.exports = {
    //API Constant
    appColor: '#F5FCFF',
    blueColor: '#0d63ff',

    screen: Dimensions.get('window'),
    isIOS: Platform.OS === 'ios',
    isANDROID: Platform.OS === 'android',
    isiPAD: ((SCREEN_HEIGHT/SCREEN_WIDTH) < 1.6),

    screenHeight:  Platform.OS === 'ios' && SCREEN_HEIGHT || SCREEN_HEIGHT - 24,
    screenWidth:  SCREEN_WIDTH,
    fullScreenHeight:  SCREEN_HEIGHT,

    fontSize:{
        mini: normalize(12),
        small: normalize(15),
        medium: normalize(17),
        large: normalize(20),
        xlarge: normalize(24),
    },
};