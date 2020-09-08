// import React from "react";
import Team from "./Team";
import with404Redirect from "../../common/with404Redirect";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        teamData: state.teamReducer.teamData,
        isAuth: state.authReducer.auth,
        level: state.authReducer.level,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: function (value) {
            console.log(value);
            // dispatch(updateTextTeamAC(value));
        },
    };
};

export default compose(
    with404Redirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Team);
