import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class DialogItem extends Component {
  render() {
    const path = `/dialogs/${this.props.id}`;
    return (
      <div className="dialog-item">
        <NavLink activeClassName={"active"} to={path}>
          {this.props.name}
        </NavLink>
      </div>
    );
  }
}

export default DialogItem;
