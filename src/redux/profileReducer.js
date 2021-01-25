const ADD_POST = "ADD-POST";
const UPD_NEW_POST = "UPDATE-NEW-POST-TEXT";
let initialState = {
  postsData: [
    { id: 1, message: "Hello! ", likesCount: "2" },
    { id: 2, message: "How are you?", likesCount: "4" },
  ],
  newPostText: "Hello",
};

const profileReducer = (state = initialState, action) => {
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
