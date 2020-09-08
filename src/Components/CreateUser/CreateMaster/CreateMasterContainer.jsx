import { connect } from 'react-redux';
import CreateMaster from './CreateMaster';
import { createNewMaster } from '../../../redux/masters-reducer';
import { onAuth } from '../../../redux/actions';
import { compose } from 'redux';
import withAuthRedirect from '../../../common/withAuthRedirect';

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { createNewMaster, onAuth })
)(CreateMaster);