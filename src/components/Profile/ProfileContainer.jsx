import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter, Redirect } from "react-router-dom";
import { getProfile } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    // console.log(this.props);
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        // console.log(this.props);
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    // setTimeout(() => {
    this.props.getStatus(userId);
    // }, 1000);
    // this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfile })(
//   WithURLDataContainerComponent
// );
