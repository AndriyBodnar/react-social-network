import React from "react";
import userPhoto from "../../assets/img/userProfile.png";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

import { followUser, unfollowUser } from "../../api/api";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => props.onPageChanged(p)}
            >
              {p}
            </span>
          );
        })}
      </div>
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
