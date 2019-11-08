import React, { Component } from 'react';
import "./Comment.css"
import server from '../dataSend/userProfileLoad';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentText : "",
            item: {author:{},comments:[]},
            count: 0,
        };
        
    }

    changeText = (elem) => {
        let text = elem.target.value;
        if(text.length < 200){
            this.setState({commentText : text});
        }
    }
    changeItem = (item)=> {
        this.setState({item:item});
    }

    addComment = () => {
        server.addComment(this.props.username,this.state.commentText, this.props.item._id, this.changeItem);
        this.setState({commentText:''})
    }
    changeComment=(comment)=>{
        this.setState({commentText : comment});
    }
    deleteComment = () => {
        
    }
    

    render() {
        //server.productRead(this.props.item._id, this.changeItem);
        return (
            <>
                <div class = "List">
                        <CommentTop username={this.props.username} userImage={'https://i.imgur.com/HTtPYah.jpg'} />
                        <div className="inputBox">
                            <TextField
                            multiline
                            rows="3"
                            defaultValue="댓글을 달아주세요~"
                            className="inputText"
                            variant="outlined"
                            value = {this.state.commentText}
                            onChange={this.changeText}
                            />
                        <div>
                            <button className= "inputButton" onClick={this.addComment}>등록</button>
                        </div>

                </div>  
                </div>
                
                <div>
                    {this.state.item.comments.map((elem, i) => 
                        <>
                        <div className = "CommentList">
                            <CommentTop username={elem.username} userImage={elem.userImage} />
                            <CommentText commentText={elem.comment} />
                        </div>
                        {elem.username === this.state.item.author.username ? <button className= "inputButton" onChange={this.deleteComment}>삭제</button> : ""}
                        </>
                    )}                   
                </div>
            </>

        );
    }
}

class CommentText extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <div className="commentText">
                    <TextField
                    disabled
                    multiline
                    rows="4"
                    className="inputText"
                    defaultValue={this.props.commentText}
                    />
                </div>
                
            </>
        );
    }
}


class CommentTop extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="">
                <ListItem>
                  <ListItemAvatar>                   
                         <Avatar className = "Image" scr={this.props.userImage} 
                         onError={(event)=>{event.target.src = 'https://i.imgur.com/HTtPYah.jpg'}}/>                   
                  </ListItemAvatar>
                  <ListItemText
                    primary={this.props.username}
                    secondary={
                        "등록시간"
                    }
                  />
                </ListItem>
          </div>
        );
    }
}