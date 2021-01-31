import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updNewPostActionCreator,
} from "../../../redux/profileReducer";

import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   // let state = props.store.getState();

//   return (
//     <StoreContent.Consumer>
//       {(store) => {
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           let action = updNewPostActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             updNewPostText={onPostChange}
//             addPost={addPost}
//             posts={store.getState().profilePage.postsData}
//             newPostText={store.getState().profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContent.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updNewMessageBody: (text) => {
      let action = updNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
