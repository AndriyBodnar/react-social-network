import { getUsers, followUser, unfollowUser, usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/objects-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOTAL_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOTAL_IS_FOLLOWING_PROGRESS";
let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
        // users: state.users.map((u) => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};
export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
// export const getUsersThunk = (page, pageSize) => {
//   return async (dispatch) => {
//     dispatch(toggleIsFetching(true));
//     dispatch(setCurrentPage(page));
//     let data = await getUsers(page, pageSize);
//     dispatch(toggleIsFetching(false));
//     dispatch(setUsers(data.items));
//     dispatch(setUsersTotalCount(data.totalCount));
//   };
// };
export const getUsersThunk = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  };
};
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};
// export const follow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleIsFollowingProgress(true, userId));
//     followUser(userId).then((data) => {
//       if (data.resultCode == 0) {
//         dispatch(followSuccess(userId));
//       }
//       dispatch(toggleIsFollowingProgress(false, userId));
//       // this.props.setTotalUsersCount(response.data.count);
//     });
//   };
// };

// export const unfollow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleIsFollowingProgress(true, userId));
//     unfollowUser(userId).then((data) => {
//       if (data.resultCode == 0) {
//         dispatch(unfollowSuccess(userId));
//       }
//       dispatch(toggleIsFollowingProgress(false, userId));
//       // this.props.setTotalUsersCount(response.data.count);
//     });
//   };
// };

export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.followUser.bind(usersAPI);
    // let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
    // dispatch(toggleIsFollowingProgress(true, userId));
    // let data = await apiMethod(userId);
    // if (data.resultCode == 0) {
    //   dispatch(actionCreator(userId));
    // }
    // dispatch(toggleIsFollowingProgress(false, userId));
    // this.props.setTotalUsersCount(response.data.count);
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.unfollowUser.bind(usersAPI);
    // let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
    // dispatch(toggleIsFollowingProgress(true, userId));
    // let data = await apiMethod(userId);
    // if (data.resultCode == 0) {
    //   dispatch(actionCreator(userId));
    // }
    // dispatch(toggleIsFollowingProgress(false, userId));
    // this.props.setTotalUsersCount(response.data.count);
  };
};

export default usersReducer;
