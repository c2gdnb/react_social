import React, { Component } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileInfo />
        <MyPosts postData={this.props.postData} />
      </div>
    );
  }
}

export default Profile;
