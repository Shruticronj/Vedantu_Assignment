import React, { Component } from "react";
import "../repos.css";

class ProfileDetails extends Component {
  constructor() {
    super();
    this.state = {
      email: "supreetsingh.247@gmail.com"
    };
  }

  render() {
    return (
      <div className="profile">
        <img src={this.props.userDetails.avatar_url} className="avatar" />
        <h2>{this.props.userDetails.name}</h2>
        <h4 className='login'>{this.props.userDetails.login}</h4>
        <button className="btn">
          <b>Follow</b>
        </button>
        <p>{this.props.userDetails.bio}</p>
        <p>
          <span className='icon'>
            <i class="fas fa-user-friends" />
          </span>
          <span className="space">{this.props.userDetails.company}</span>
        </p>
        <p>
          <span className='icon'>
            <i class="fas fa-map-marker-alt" />
          </span>
          <span className="location">{this.props.userDetails.location}</span>
        </p>
        <p>
          <span className='icon'>
            <i class="far fa-envelope" />
          </span>
          <span className="mail">{this.state.email}</span>
        </p>
        <p>Block or report user</p>
      </div>
    );
  }
}

export default ProfileDetails;
