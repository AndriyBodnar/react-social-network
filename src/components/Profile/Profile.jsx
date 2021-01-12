import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo source="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
      <MyPosts posts={props.state.postsData} addPost={props.addPost} />
    </div>
  );
};
export default Profile;
