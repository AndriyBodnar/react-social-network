import React from "react";
import preloader from "../../../assets/img/preloader.svg";

let Preloader = (props) => {
  return (
    <div style={{ backgoundColor: "white" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
