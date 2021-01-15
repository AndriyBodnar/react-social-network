const ADD_POST = "ADD-POST";
const UPD_NEW_POST = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPD_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updNewPostActionCreator = (text) => {
  return {
    type: UPD_NEW_POST,
    newText: text,
  };
};

export default profileReducer;
