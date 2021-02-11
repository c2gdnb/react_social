import React, { Component } from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

class MyPosts extends Component {
  render() {
    return (
      <div>
        <h2>My posts</h2>
        <div className="message">
          <textarea className="messageField">your post</textarea>
          <button className="messageButton">Add post</button>
        </div>
        <div className="posts">
          {this.props.postData.map((item) => (
            <Post message={item.message} likesCount={item.likesCount} />
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
