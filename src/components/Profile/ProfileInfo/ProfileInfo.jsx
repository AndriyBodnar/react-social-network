import React from "react";
import Preloader from "../../common/preloader/preloader";
import { ProfileStatus } from "./ProfileStatus";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img src={props.source} />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <div>{props.profile.aboutMe}</div>
        <div>Github: {props.profile.contacts.github}</div>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};
export default ProfileInfo;
