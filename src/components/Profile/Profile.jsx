import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        source="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer
      // store={props.store}
      // posts={props.profilePage.postsData}
      // newPostText={props.profilePage.newPostText}
      // dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;
