import React from "react";
import { connect } from "react-redux";
import { navigate } from "@reach/router";
import { logout } from "../actions";

const LoginLogout = ({ currentUser, logout }) => {
  const loginLogoutUser = () => {
    if (currentUser) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <button className="LoginLogout" onClick={loginLogoutUser}>
      {currentUser ? "Logout" : "Login"}
    </button>
  );
};

const mapState = state => ({
  currentUser: state.user.user
});

export default connect(mapState, { logout })(LoginLogout);
