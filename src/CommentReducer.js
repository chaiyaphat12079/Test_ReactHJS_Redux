const commentReducer = (state =[],action) =>{
    //เขียนรูปแบบ action
    switch(action.type){
        case "ADD_COMMENT":
            return state.concat([action.data]);
        case "DELETE_COMMENT":
            return state.filter((comment)=>comment.id !== action.id)
        case "DELETE_ALL_COMMENT":
            return state.filter((comment)=>false)
        case "EDIT_COMMENT":
            return state.map((comment)=>comment.id === action.id ? {...comment,editing:!comment.editing}:comment)
            // return state.filter((comment)=>comment.id !== action.id)
        case "UPDATE_COMMENT":
            return state.map((comment)=>{
                if(comment.id === action.id){
                    console.log(action.data)
                    
                    return{
                        ...comment,
                        firstName:action.data.firstName,
                        lastName:action.data.lastName,
                        mobilePhone:action.data.mobilePhone,
                        preFixPhone:action.data.preFixPhone,
                        gender:action.data.gender,
                        nationality:action.data.nationality,
                        editing:!comment.editing
                    }
                }else{
                    return comment
                }
            })
        default:
            return state;
    }
    
}

export default commentReducer;