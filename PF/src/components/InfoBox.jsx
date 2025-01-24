import React, { forwardRef } from "react";
import "./infobox.css";
import Button from "./Button";

const InfoBox = forwardRef(function InfoBox(
  { onADD, title, onOpen, description, titleRef, descriptionRef },ref
) {
  return (
    <div className="info-box">
      {title ? (
        <>
          <h3>{title.toUpperCase()}</h3>
          <p  style={{color:"gray", fontWeight:"lighter",}}>{description}</p>
        </>
      ) : (
        <div className="input-div">
          <input type="text" ref={titleRef} placeholder="Title" />
          <input type="text" ref={descriptionRef} placeholder="Description" />
        </div>
      )}
      <Button onClick={title ? onOpen : onADD}>
        {title ? "Open" : "ADD"}
      </Button>
    </div>
  );
});

export default InfoBox;