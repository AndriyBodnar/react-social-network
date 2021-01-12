import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        alt=""
      />
      {props.message}
      <div>like: {props.likeCounter}</div>
    </div>
  );
};
export default Post;
