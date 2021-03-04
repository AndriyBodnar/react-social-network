import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
  getUsersThunk,
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { getUsers } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUser,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/userSelectors";
// import UsersAPIComponent from "./UsersAPIComponent";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
    // getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setUsersTotalCount(data.totalCount);
    // });
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    // this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);
    // getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   // this.props.setTotalUsersCount(response.data.count);
    // });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUser(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

// let withUsersRedirect = withAuthRedirect(UsersContainer);

// export default withAuthRedirect(
//   connect(mapStateToProps, {
//     follow,
//     unfollow,
//     // setUsers,
//     setCurrentPage,
//     // setUsersTotalCount,
//     // toggleIsFetching,
//     toggleIsFollowingProgress,
//     getUsers: getUsersThunk,
//   })(UsersContainer)
// );

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setUsersTotalCount,
    // toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers: getUsersThunk,
  })
  //withAuthRedirect
)(UsersContainer);

// let name = 5;
// let nameobj = {
//   name
// }  =>    {name: name(5)}
