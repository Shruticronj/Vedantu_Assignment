import React, { Component } from 'react';
import { connect } from 'react-redux';
import './asd.css';

class Box extends Component{
    
    render(){
       if(this.props.data.length < 1){
           return <div>Loading...</div>
       }
        return(
            <div>
                {this.props.data.map((item,index)=>{
                    if(index < 6){
                        return (
                            <div className='outer-div'>
                            <div className='box'>
                                <p key={index} className='box-title'><b>{item.name}</b></p>
                                <p className='box-desc'>{item.description}</p>
                                <p>
                                    <span style={{width:'20px',height:'20px',borderRadius:'50%',backgroundColor:'yellow'}}>
                                    </span>{item.language}{item.stargazers_count}</p>
                            </div>
                            </div>
                        )
                    }
                    }
                    )
                    }
                <p>2 contributions in the last year. </p>
        
        </div>
        )}
}

function mapStateToProps(state){
    return{
        data: state.arr
    }
}

export default connect(mapStateToProps)(Box);