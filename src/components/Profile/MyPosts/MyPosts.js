import React, { Component } from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

class MyPosts extends Component {
  render() {
    const postData = [
      { id: 1, message: "Hi how are you ?", likesCount: "10" },
      { id: 2, message: "Good morning", likesCount: "3" },
    ];
    return (
      <div>
        <h2>My posts</h2>
        <div className="message">
          <textarea className="messageField">your post</textarea>
          <button className="messageButton">Add post</button>
        </div>
        <div className="posts">
          {postData.map((item) => (
            <Post message={item.message} likesCount={item.likesCount} />
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
