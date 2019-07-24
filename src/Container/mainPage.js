import React, { Component } from "react";
import Repos from "../Component/repos";
import { connect } from "react-redux";
import { getRepos, getUserDetails } from "../Action/index";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import ProfileDetails from "../Component/profileDetails";
import "../repos.css";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      value: "first"
    };
  }

  componentDidMount() {
    this.props.getUserDetails();
    this.props.getRepos();
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  render() {

    return (
      <div className="mainPage">
        <MuiThemeProvider>
          <div className="profileDetails">
            <ProfileDetails userDetails={this.props.data.profile} />
          </div>
          <div className="body">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              style={{ backgroundColor: "white", width: "100%" }}
              inkBarStyle={{
                backgroundColor: "FireBrick",
                width: "70px",
                marginLeft: "10px"
              }}
              tabItemContainerStyle={{ backgroundColor: "white", width: "90%" }}
            >
              <Tab
                value="first"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontFamily: "Arial"
                }}
                label="Overview"
              />

              <Tab
                value="second"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontFamily: "Arial"
                }}
                label={
                  <p>
                    Repositories<span className="tabStyle">12</span>
                  </p>
                }
              />
              <Tab
                value="third"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontFamily: "Arial"
                }}
                label={
                  <p>
                    Projects<span className="tabStyle">0</span>
                  </p>
                }
              />

              <Tab
                value="fourth"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontFamily: "Arial"
                }}
                label={
                  <p>
                    Stars<span className="tabStyle">7</span>
                  </p>
                }
              />

              <Tab
                value="five"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontFamily: "Arial"
                }}
                label={
                  <p>
                    Followers<span className="tabStyle">4</span>
                  </p>
                }
              />

              <Tab
                value="six"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  fontFamily: "Arial"
                }}
                label={
                  <p>
                    Following<span className="tabStyle">2</span>
                  </p>
                }
              />
            </Tabs>
            <div className="horizontal-line" />
            <Repos repos={this.props.data.repos} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => {
      dispatch(getUserDetails());
    },
    getRepos: () => {
      dispatch(getRepos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
