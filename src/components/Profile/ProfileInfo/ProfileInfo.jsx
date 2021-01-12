import React from "react";

import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let source = props.source;
  return (
    <div>
      <div>
        <img src={source} />
      </div>
      <div className={s.descriptionBlock}>ava + descrp</div>
    </div>
  );
};
export default ProfileInfo;
