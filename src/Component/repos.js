import React, { Component } from "react";
import "../repos.css";
import { Icon } from "antd";
import { NotificationPhoneBluetoothSpeaker } from "material-ui/svg-icons";

class Repos extends Component {
  render() {
    if (this.props.repos.length < 1) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div className="outer-div">
          {this.props.repos.map((item, index) => {
            if (index < 6) {
              return (
                <div className="box">
                  <p key={index} className="box-title">
                    <b>{item.name}</b>
                  </p>
                  <p className="box-desc">{item.description}</p>

                  {item.language === "JavaScript" ? (
                    <div style={{ display: "flex" }}>
                      <p className="yellow-circle" />
                      <p>
                        {item.language}
                        &nbsp; &nbsp; &nbsp;
                        {item.name === "bidding" ? (
                          <Icon type="star" theme="filled" style={{marginTop:'3px'}}/> 
                        ) : (
                          ""
                        )}
                       &nbsp; {item.stargazers_count}
                      </p>
                    </div>
                  ) : (
                    <div>
                      {item.language === "CSS" ? (
                        <div style={{ display: "flex" }}>
                          <p className="blue-circle" />
                          <p>
                            {item.language}
                            {item.stargazers_count}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
        <p>2 contributions in the last year. </p>
      </div>
    );
  }
}

export default Repos;
