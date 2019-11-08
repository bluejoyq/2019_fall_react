import React from 'react';
import './Main.css';
import { FaSearch } from "react-icons/fa";
import Popup from '../Popup/Popup';
import UserProfile from '../UserProfile/UserProfile';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import List from '../List/List';
import {Fab, Tooltip} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import AddItem from '../AddItem/AddItem';

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin : false,
            showProfile: false,
            showLogin: false,
            showSignup: false,
            showAddItem: false,
            username: null,
        }  
        
    }
    componentDidMount(){
        this.getInitialState();
    }
    getInitialState = () => {
        let name = sessionStorage.getItem('username');
        if(name != null){
            this.setState({username: name, isLogin: true})
        }
    }

    logout = () => {
        this.setState({
            isLogin: false,
            username:null,
        });
        sessionStorage.removeItem('username');
        alert("logout");
    }
    profile = () => {
        if( this.state.isLogin !== true) {
            alert("로그인이 안됐습니다!");
            return 0;
        }
        this.toggleProfile();
    }
    toggleProfile=()=>{
        this.setState({
            showProfile: !this.state.showProfile
        });
    }
    toggleLogin=()=>{
        this.setState({
            showLogin: !this.state.showLogin
        });
    }
    toggleSignup=()=>{
        this.setState({
            showSignup: !this.state.showSignup
        });
    }
    toggleAddItem=()=>{
        this.setState({
            showAddItem: !this.state.showAddItem
        });
    }
    setAccount=(name)=>{
        this.setState({
            username:name,
            isLogin: true,
        });
        sessionStorage.setItem('username',name);
    }

    render() {
        return (        
            <div>
                <div className = 'mainTop'>
                    <div className = 'mainLogo'>
                        <div className = 'mainLogoText'>LOGO</div>
                    </div>
                    <div className = 'mainBlank'>
                        <div></div>
                    </div>
                    <div className = 'mainSearch'>
                        <FaSearch className = 'searchIcon' color={'black'} size={24} />
                    </div>
                    <div className = 'mainProfile'>
                        { 
                            this.state.isLogin ? 
                            <div className='mainProfileSet'>
                            <div className='mainProfileText' onClick={this.profile}>내정보</div>
                            <div className='mainProfileText' onClick={this.logout}>로그아웃</div>
                            </div> 
                            : <div className='mainProfileSet'>
                            <div className='mainProfileText' onClick={this.toggleLogin}>로그인</div>
                            <div className='mainProfileText' onClick={this.toggleSignup}>회원가입</div>
                            </div>
                        }
                    </div>
                </div>
                
                <div className='mainNav'>
                    <div className='mainNavOption'>
                        <div>
                            <div className='mainNavTextHigh'>최신</div>
                        </div>
                        <div>
                            <div className='mainNavText'>인기</div>
                        </div>     
                    </div>
                    
                </div>
                <div className = 'mainContent'>
                    <div className = 'mainList'>
                        <List isLogin={this.state.isLogin} username={this.state.username}/>
                    </div>
                </div>
                {this.state.showProfile ? 
                <Popup
                    text='내 정보'
                    closePopup={this.toggleProfile}
                    content={<UserProfile username={this.state.username} isMine={true}/>}
                />
                : null
                }
                {this.state.showLogin ? 
                <Popup
                    text=''
                    closePopup={this.toggleLogin}
                    content={<Login closePopup={this.toggleLogin} changePopup={this.toggleSignup} setAccount={this.setAccount} />}
                />
                : null
                }
                {this.state.showSignup ? 
                <Popup
                    text=''
                    closePopup={this.toggleSignup}
                    content={<Signup closePopup={this.toggleSignup} changePopup={this.toggleLogin} />}
                />
                : null
                }
                {this.state.showAddItem ?
                <Popup
                    text='물품 추가하기'
                    closePopup={this.toggleAddItem}
                    content={<AddItem closePopup={this.toggleAddItem}/>}
                />
                : null
                }
                {this.state.isLogin && !this.state.showAddItem ?
                    <div className='mainAdd' onClick={this.toggleAddItem}>
                        <Tooltip title="물품 등록하기" aria-label="물품 등록하기">
                            <Fab color="primary" aria-label="add">
                            <AddIcon />
                            </Fab>
                        </Tooltip> 
                    </div>
                    : null
                }
            </div>
        )
    }
}