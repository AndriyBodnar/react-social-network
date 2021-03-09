import React from "react";
import userPhoto from "../../assets/img/userProfile.png";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

import { followUser, unfollowUser } from "../../api/api";
import Paginator from "../common/Paginator/Paginator";
let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  ...props
}) => {
 
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />

      {/* <button onClick={this.getUsers}>Get users</button> */}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"profile/" + u.id}>
                {" "}
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=""
                  className={styles.userPhoto}
                />{" "}
              </NavLink>
            </div>
          </span>
          <span>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                  // props.toggleIsFollowingProgress(true, u.id);
                  // unfollowUser(u.id).then((data) => {
                  //   if (data.resultCode == 0) {
                  //     props.unfollow(u.id);
                  //   }
                  //   props.toggleIsFollowingProgress(false, u.id);
                  //   // this.props.setTotalUsersCount(response.data.count);
                  // });
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                  // props.toggleIsFollowingProgress(true, u.id);
                  // followUser(u.id).then((data) => {
                  //   if (data.resultCode == 0) {
                  //     props.follow(u.id);
                  //   }
                  //   props.toggleIsFollowingProgress(false, u.id);
                  //   // this.props.setTotalUsersCount(response.data.count);
                  // });
                  // props.follow(u.id);
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
