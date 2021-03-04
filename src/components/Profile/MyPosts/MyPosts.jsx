import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControl";
import {
  requiredField,
  maxLengthCreator,
} from "../../../utils/validators/validators";
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
  let addNewPost = (value) => {
    props.addPost(value.newPostBody);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
let maxLength30 = maxLengthCreator(30);
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          validate={[requiredField, maxLength30]}
          placeholder="Post message"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "newAddPostForm" })(AddPostForm);
