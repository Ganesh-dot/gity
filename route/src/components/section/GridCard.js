import React from "react";
import "./GridCard.css";

export function GridCard() {
  const title = "Card Title";
  const imageUrl = "";
  const body =
    "so that the intermediate components don’t need to know about the user or avatarSize props:";
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a>View More</a>
        </button>
      </div>
    </div>
  );
}
