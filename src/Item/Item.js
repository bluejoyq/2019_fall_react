import React from 'react';
import './Item.css';
import UserProfile from '../UserProfile/UserProfile';
import Popup from '../Popup/Popup';
import Profile from '../Profile/Profile';

export default class Item extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showProfile: false,
            showItem: false,
        }
    }


    toggleProfile=()=>{
        this.setState({
            showProfile: !this.state.showProfile,
        });
    }
    toggleItem=()=>{
        this.setState({
            showItem: !this.state.showItem
        });
    }
    

    render() {
        return(
            <div>
                {this.state.showProfile ? 
                    <Popup
                            text='계정 정보'
                            closePopup={this.toggleProfile}
                            content={<UserProfile username = {this.props.item.author.username} />}
                    />
                : null}
                {this.state.showItem ?
                    <Popup
                        text='물품 정보'
                        closePopup={this.toggleItem}
                        content={<Profile _id = {this.props.item._id} togglePopup = {this.toggleItem} 
                        isLogin={this.props.isLogin} username={this.props.username}/>}
                    />
                    
                : null
                }
                <div className='item' onClick={this.props.openPopup(this.props.item._id)}>
                    <div className='info'>
                        <span className='userInfo'>
                            <div className='userInfo' onClick={this.toggleProfile}>
                                <img className='littlePic' 
                                src={'https://khuthon.s3.ap-northeast-2.amazonaws.com/'+this.props.item.author.profileImage}
                                onError={(event)=>{event.target.src = 'https://i.imgur.com/HTtPYah.jpg'} }
                                />
                                <span className='itemUser'>{this.props.item.author.nickname}</span>
                            </div>
                            <div className='itemLocation'>
                                {this.props.item.location + ' ' + this.props.item.subLocation}
                            </div>
                            
                        </span>
                        <div className='itemInfo'  onClick={this.toggleItem}>
                            <div className='itemTitle'>
                                {this.props.item.title}
                            </div>
                            <div className='itemPrice'>
                                {this.props.item.price}원(일당)
                            </div>
                        </div>
                    </div>
                    <div className='itemPic'>
                        <img className='pic'
                        src={'https://khuthon.s3.ap-northeast-2.amazonaws.com/'+this.props.item.productImage}
                        />  
                    </div>
                </div>
            </div>
        )
    }

}