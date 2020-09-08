import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../common/withAuthRedirect';
import { onAuth } from '../../../redux/actions';
import { createNewMaster } from '../../../redux/masters-reducer';
import { addDataTeamAC } from '../../../redux/teams-reducer';
import CreateLeadMaster from './CreateLeadMaster';

let mapStateToProps = (state) => {
    return {
        totalCountMasters: state.masterReducer.masters.length,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { createNewMaster, onAuth, addDataTeamAC })
)(CreateLeadMaster);