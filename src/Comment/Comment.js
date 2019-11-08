import React, { Component } from 'react';
import "./Comment.css"
import server from '../dataSend/userProfileLoad';
import {Divider,Button,TextField,Avatar,ListItemText,ListItemAvatar,ListItem} from '@material-ui/core'

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentText : "",
            item: {author:{},comments:[]},
            count: 0,
        };
        
    }

    componentDidMount(){
        //server.productRead(this.props._id,this.changeItem);
        fetch("https://evening-peak-07863.herokuapp.com/api/products/"+this.props._id, 
        { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then( (jsonData) => {
            let datas = jsonData.json();
            this.changeItem(datas);
            return 1;
        })
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
                <div className = "List">
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
                        <div className='commentBottom'>
                            <Button className= "inputButton" onClick={this.addComment}>등록</Button>
                        </div>
                        
                    </div>  
                    <Divider variant="middle"/>
                </div>
               
                <div>
                    {this.state.item.comments.map((elem, i) => 
                        <div key={i}>
                        <div key={i} className = "CommentList">
                         
                            <CommentTop username={elem.username} userImage={elem.userImage}  createdAt={elem.createdAt} key={i}/>

                            <CommentText commentText={elem.comment} key={i} />
                        </div>
                        {elem.username === this.state.item.author.username ? <button key={i} className= "inputButton" onChange={this.deleteComment}>삭제</button> : ""}
                        </div>
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
            <div className="all">
                <ListItem>
                  <ListItemAvatar>                   
                         <Avatar className = "Image" scr={this.props.userImage} 
                         onError={(event)=>{event.target.src = 'https://i.imgur.com/HTtPYah.jpg'}}/>                   
                  </ListItemAvatar>
                  <ListItemText
                    primary={this.props.username}
                    secondary={""}
                    />
                </ListItem>
          </div>
        );
    }
}