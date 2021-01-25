import React from "react";
import {
  addPostActionCreator,
  updNewPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updNewPostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsContainer;
