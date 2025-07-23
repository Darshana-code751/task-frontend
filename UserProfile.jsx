import React, { useContext } from "react";
import "./UserProfile.css";
import { AuthContext } from "../Context/AuthContex";

function UserProfile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="userprofile_container">
      <div className="user_card">
        <h2 className="user_heading">Your Profile</h2>

        <div className="user_info">
          <span className="user_label">Name:</span> {user?.name || "No Name"}
        </div>

        <div className="user_info">
          <span className="user_label">Email:</span> {user?.email || "No Email"}
        </div>

        <div className="user_info">
          <span className="user_label">Role:</span> {user?.role || "User"}
        </div>

        <button className="logout_button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
