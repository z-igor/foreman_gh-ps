// import React from "react";
import Main from "./Main";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        teamData: state.teamReducer.teamData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        /* dispatch: function(value) {
            dispatch(updateTextTeamAC(value));
        } */
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;