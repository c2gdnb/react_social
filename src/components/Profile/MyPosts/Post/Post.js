import React, { Component } from "react";
import LikeIcon from "../../../Icons/Like";
import "./Post.css";

class Post extends Component {
  render() {
    return (
      <div className="item">
        <img src="https://www.w3schools.com/howto/img_avatar.png" />
        <div className="postText">{this.props.message}</div>
        <span className="likes-wrapper">
          <LikeIcon />
          {this.props.likesCount}
        </span>
      </div>
    );
  }
}

export default Post;
