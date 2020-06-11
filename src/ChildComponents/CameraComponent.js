import React from "react";
import "../index.css";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function CameraComponent() {
  function handleTakePhoto(dataUri) {
    console.log(dataUri);
  }
  return (
    <div className="wrapper">
      <div className="child-items">
        <h3>Hello</h3>
      </div>
      <div className="child-items fl-column">
        <h3>Camera Button</h3>
        <h3>Click button to open it</h3>
        <Camera
          isFullscreen={true}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        ></Camera>
      </div>
      <div className="child-items">
        <h3>Hello</h3>
      </div>
    </div>
  );
}

export default CameraComponent;
