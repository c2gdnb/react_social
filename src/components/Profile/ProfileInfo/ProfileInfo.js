import React, { Component } from "react";
import "./ProfileInfo.css";

class ProfileInfo extends Component {
  render() {
    return (
      <div>
        <div className="content__top-image">
          <img
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8&w=1000&q=80"
            alt="content-img"
          />
        </div>
        <div className="profile">
          <div className="profile__photo">
            <img
              src="https://download-cs.net/steam/avatars/3426.jpg"
              alt="user"
            />
          </div>
          <div className="profile__description">
            <div className="profile__name">Vladymir K.</div>
            <ul>
              <li>Date of Birth: 16 january</li>
              <li>City: Kiev</li>
              <li>Education: BSU'11</li>
              <li>Web site: https://it-kamasutra.com</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
