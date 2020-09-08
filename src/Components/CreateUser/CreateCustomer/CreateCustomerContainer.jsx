import { connect } from 'react-redux';
import CreateCustomer from './CreateCustomer';
import { onAuth } from '../../../redux/actions';
import { compose } from 'redux';
import withAuthRedirect from '../../../common/withAuthRedirect';

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { onAuth })
)(CreateCustomer);