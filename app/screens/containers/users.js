import { connect } from 'react-redux';
import {API_CALL_REQUEST} from '../../actions/types';
import Users from '../components/users';

const mapStateToProps = state => {
    const {userList, fetching} = state.user;
    return {
        userList,
        fetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestUSers: () => dispatch({ type: API_CALL_REQUEST })
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);