import { connect } from 'react-redux';
import { compose } from 'redux';
import SignIn from './SignIn';
import { logOn } from '../../redux/actions';
import withAuthRedirect from '../../common/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.auth,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { logOn })
)(SignIn);