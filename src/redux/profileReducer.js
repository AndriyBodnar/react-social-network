import { getProfile, profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";

const UPD_NEW_POST = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
let initialState = {
  postsData: [
    { id: 1, message: "Hello! ", likesCount: "2" },
    { id: 2, message: "How are you?", likesCount: "4" },
  ],
  newPostText: "Hello",
  profile: null,
  status: "ааа",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostBody,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
      // stateCopy.postsData = [...state.postsData];
      // stateCopy.postsData.push(newPost);
      // stateCopy.newPostText = "";
    }
    case UPD_NEW_POST: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const updNewPostActionCreator = (text) => {
  return {
    type: UPD_NEW_POST,
    newText: text,
  };
};
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
// export const getUserProfile = (userId) => (dispatch) => {
//   getProfile(userId).then((response) => {
//     dispatch(setUserProfile(response.data));
//   });
// };
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
