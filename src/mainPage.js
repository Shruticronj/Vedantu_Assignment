import React, { Component } from 'react';
import axios from 'axios';
import Box from './box';
import { connect } from 'react-redux';
import { getRepos, getProfile } from './action/index';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Tabs, Tab } from "material-ui/Tabs";
import { Icon } from 'antd';
import ProfileDetails from './profileDetails';
import './asd.css';

class MainPage extends Component{
  constructor(){
    super();
    this.state={
      value:'first'
    }
  }
    
  handleChange = value => {
        this.setState({
          value: value
        });
      };

    componentDidMount(){
        axios.get('https://api.github.com/users/supreetsingh247')
        .then(response => 
            this.props.dispatch(getProfile(response))
        )
        
        axios.get('https://api.github.com/users/supreetsingh247/repos')
        .then(response => 
            this.props.dispatch(getRepos(response))
            )
        }

    render(){
        return(
            <div className='mainPage'>
                <MuiThemeProvider>
                <div className='profileDetails'>
                    <ProfileDetails/>
                </div>
                <div className='body'>
                <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                inkBarStyle={{
                  backgroundColor:'FireBrick',
                  width: "110px"
                }}
              >
                <Tab
                  value="first"
                  style={{ color: "black",backgroundColor:'white' }}
                  label="Overview"
                >
                </Tab>
                <Tab
                  value="second"
                  style={{ color: "black",backgroundColor:'white' }}
                  label="Repositories"
                >
                </Tab>
                <Tab
                  value="third"
                  style={{ color: "black",backgroundColor:'white' }}
                  label="Projects"
                >
                </Tab>
                <Tab
                  value="fourth"
                  style={{ color: "black",backgroundColor:'white' }}
                  label="Stars"
                >
                </Tab>
                <Tab
                  value="five"
                  style={{ color: "black",backgroundColor:'white' }}
                  label="Followers"
                >
                </Tab>
                <Tab
                  value="six"
                  style={{ color: "black",backgroundColor:'white' }}
                  label="Following"
                >
            </Tab>
            </Tabs>
            <div className='horizontal-line'></div>
                    <Box/>
                   
                    </div>
                    </MuiThemeProvider>
                </div>
                

        )
    }
}

function mapStateToProps(state){
    return{
        data: state
    }
}



export default connect(mapStateToProps)(MainPage);