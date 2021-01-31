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
