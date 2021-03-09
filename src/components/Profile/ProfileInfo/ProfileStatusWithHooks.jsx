import React, { useEffect, useState } from "react";
import Preloader from "../../common/preloader/preloader";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false); //array
  let [status, setStatus] = useState(props.status);
  //   let editMode = stateWithSetState[0];
  //   let setEditMode = stateWithSetState[1];
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <h2 onDoubleClick={activateEditMode}>
            {/* this.activateEditMode.bind(this) */}
            {props.status || "--------"}
          </h2>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            value={status}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
