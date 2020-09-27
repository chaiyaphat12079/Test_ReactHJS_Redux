import React, { Component } from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'
import EditComponent from './EditComponent'

class ShowComment extends Component{
    render(){
        return(
            <div style={{display:'flex',padding:20,flexDirection:'column',paddingRight:50,paddingLeft:50,alignItems:'center',}}>
                <div style={{backgroundColor:'#F0F3F5',width:'80%',height:1000,padding:20}}>
                    <div style={{backgroundColor:'#095DA1 ',width:'100%',height:50,flexDirection:'row',display:'flex',alignItems:'center'}}>
                        <h3 style={{marginLeft:50}}>Name</h3>
                        <h3 style={{marginLeft:200}}>Gender</h3>
                        <h3 style={{marginLeft:100}}>Mobile Phone</h3>
                        <h3 style={{marginLeft:200}}>Nationality</h3>

                    </div>
                {this.props.comments.map((comment)=>(
                    <div key={comment.id}>
                        {comment.editing ? <EditComponent comment={comment} key={comment.id} />:
                        <Comment key={comment.id} comment={comment}/>}
                    </div>
                ))}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        comments: state
    }
}

export default connect(mapStateToProps)(ShowComment)