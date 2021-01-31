import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updNewPostActionCreator,
} from "../../../redux/profileReducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map((el) => (
    <Post message={el.message} likeCounter={el.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    // let text = newPostElement.current.value;
     props.addPost();
    //props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updNewMessageBody(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
