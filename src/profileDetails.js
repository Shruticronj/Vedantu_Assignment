import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import './asd.css';

class ProfileDetails extends Component{
    constructor(){
        super();
        this.state={
            email: 'supreetsingh.247@gmail.com'
        }
    }
    render(){
        console.log('Profile--->>',this.props.details)
        return(
            <div className='profile'>
                <img src={this.props.details.avatar_url} className='avatar'/>
                <h2>{this.props.details.name}</h2>
                <h3>{this.props.details.login}</h3>
                <button className='btn'><b>Follow</b></button>
                <p>{this.props.details.bio}</p>
                <p>{this.props.details.company}</p>
                <p>{this.props.location}</p>
                <p className='mail'><Icon type= 'mail'/>  <span>{this.state.email}</span></p>
                <p>Block or report user</p>
                </div>
        )
    }
}

function mapStateToProps(state){
    return {
        details: state.profile
    }
}

export default connect(mapStateToProps)(ProfileDetails);