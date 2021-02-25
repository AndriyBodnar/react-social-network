import { getProfile } from "../api/api";
const ADD_POST = "ADD-POST";

const UPD_NEW_POST = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
  postsData: [
    { id: 1, message: "Hello! ", likesCount: "2" },
    { id: 2, message: "How are you?", likesCount: "4" },
  ],
  newPostText: "Hello",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
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
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST,
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

export const getUserProfile = (userId) => (dispatch) => {
  getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer;
