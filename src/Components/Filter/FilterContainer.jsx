// import React from "react";
import Filter from "./Filter";
import { connect } from "react-redux";
import { updateTextTeamAC } from "../../redux/teams-reducer";

let mapStateToProps = (state) => {
    return {
        state,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: function (value) {
            dispatch(updateTextTeamAC(value));
        },
    };
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
