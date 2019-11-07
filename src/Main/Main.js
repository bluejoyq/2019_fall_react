import React from 'react';
import './Main.css';
import { FaSearch } from "react-icons/fa";
import Popup from '../Popup/Popup';
import UserProfile from '../UserProfile/UserProfile';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import List from '../List/List';
import {Fab} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';

export default class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin : false,
            showProfile: false,
            showLogin: false,
            showSignup: false,
            account: null,
        }
    }
    logout = () => {
        this.setState({
            isLogin: false,
            account:null,
        });
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
    setAccount=(account)=>{
        this.setState({
            account:account,
            isLogin: true,
        });
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
                        <List/>
                    </div>
                </div>
                {this.state.showProfile ? 
                <Popup
                    text='내 정보'
                    closePopup={this.toggleProfile}
                    content={<UserProfile username={this.state.account.username} isMine={true}/>}
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
                {this.state.isLogin ?
                    <div className='mainAdd'>
                    <Fab color="primary" aria-label="add">
                    <AddIcon />
                    </Fab>
                    </div>
                    : null
                }
            </div>
        )
    }
}