import { createStackNavigator, createAppContainer } from 'react-navigation';
import Users from '../screens/containers/users';
import UserDetails from '../screens/containers/userDetail';

const AppNavigator = createStackNavigator({
    users: Users,
    userDetails: UserDetails,
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;