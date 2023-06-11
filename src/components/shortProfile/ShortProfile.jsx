import React from "react";
import { URL } from "../../utils/BaseUrl";
import "./ShortProfile.css";

function ShortProfile({ avatar, firstName, lastName }) {
  return (
    <div className="shortProfile-layout">
      <div>
        <img
          src={avatar ? `${URL}/${avatar}` : "/avatar.png"}
          className="avatar-image"
        />
      </div>
      <div>
        <h3>{`${firstName[0].toUpperCase() + firstName.slice(1)} ${
          lastName[0].toUpperCase() + lastName.slice(1)
        }`}</h3>
      </div>
    </div>
  );
}

export default ShortProfile;
