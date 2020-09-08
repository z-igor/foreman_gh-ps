import Header from "./Header";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.auth,
        name: state.authReducer.name,
        label: state.authReducer.label,
    }
}

export default connect(mapStateToProps, null)(Header);