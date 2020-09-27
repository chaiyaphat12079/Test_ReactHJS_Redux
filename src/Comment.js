import React, { Component } from 'react'
import {connect} from 'react-redux'
class Comment extends Component{
    showAllData(){
        console.log(this.props.comment.id)
    }
    render(){
        return(
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{marginLeft:20}}>
                    <h3>{this.props.comment.firstName}  {this.props.comment.lastName}</h3>    
                </div>
                <div style={{marginLeft:320,position:'absolute'}}>
                    <p>{this.props.comment.gender}</p>
                </div>
                <div style={{marginLeft:470,position:'absolute'}}>
                    <p>{this.props.comment.preFixPhone.value}</p>
                </div>
                <div style={{marginLeft:515,position:'absolute'}}>
                    <p>{this.props.comment.mobilePhone}</p>
                </div>
                <div style={{marginLeft:810,position:'absolute'}}>
                    <p>{this.props.comment.nationality}</p>
                </div>
                {/* <p>{this.props.comment.editing}</p> */}
                <div style={{marginLeft:1000,position:'absolute',marginTop:20}}>
                    <button onClick={()=>this.props.dispatch({type:"EDIT_COMMENT",id:this.props.comment.id})}>Edit</button>
                    <button onClick={()=>this.props.dispatch({type:"DELETE_COMMENT",id:this.props.comment.id})}>Delete</button>
                    {/* <button onClick={()=>{this.showAllData()}}>Show ID</button> */}
                </div>

            </div>
        )
    }
}

export default connect() (Comment)