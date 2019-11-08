/* eslint-disable jsx-a11y/alt-text */
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
import { withStyles } from "@material-ui/core/styles";
import SearchBar from '../SearchBar/SearchBar';
import ListGood from '../List/ListGood';

const styles = theme => ({

});


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin : false,
            showProfile: false,
            showLogin: false,
            showSignup: false,
            showAddItem: false,
            showSearch: false,
            showGood: false,
            username: null,
            search:{do:'',gu:'',keyword:'',temp:''},
            textHighlight:["mainNavTextHigh","mainNavText","mainNavText"],
            contentMargin:"mainContent",
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
    toggleSearch=()=>{
        if(this.state.showSearch) {
            this.setState({
                showSearch: !this.state.showSearch,
                showGood:false,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavTextHigh","mainNavText","mainNavText"], 
                contentMargin:"mainContent",
            })
        }
        else{
            this.setState({
                showSearch: !this.state.showSearch,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavText","mainNavTextHigh","mainNavText"], 
                contentMargin:"mainContentSmall",
            })
        }

    }
    setAccount=(name)=>{
        this.setState({
            username:name,
            isLogin: true,
        });
        sessionStorage.setItem('username',name);
    }
    changeSearch=(search)=>{
        this.setState({search:search});
    }
    changeGood=(event)=>{
        if(this.state.showGood === true && event.target.id==='b1'){
            this.setState({
                showSearch: false,
                showGood: false,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavTextHigh","mainNavText","mainNavText"], 
                contentMargin:"mainContent",
            })
        }
        else if(this.state.showGood === false && event.target.id==='b3'){
            this.setState({
                showSearch: false,
                showGood: true,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavText","mainNavText","mainNavTextHigh"], 
                contentMargin:"mainContent",
            })
        }
        else if(this.state.showSearch===true && event.target.id==='b3'){
            this.setState({
                showSearch: false,
                showGood: false,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavText","mainNavText","mainNavTextHigh"], 
                contentMargin:"mainContent",
            })
        }
        else if(this.state.showSearch===true && event.target.id==='b1'){
            this.setState({
                showSearch: false,
                showGood: false,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavTextHigh","mainNavText" ,"mainNavText"],
                contentMargin:"mainContent",
            })
        }
        else if(this.state.showGood===true && event.target.id==='b2'){
            this.setState({
                showSearch: true,
                showGood: false,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavText","mainNavTextHigh","mainNavText"], 
                contentMargin:"mainContentSmall",
            })
        }
        else if(this.state.showGood===false && event.target.id==='b2'){
            this.setState({
                showSearch: true,
                showGood: false,
                search:{do:'',gu:'',keyword:''},
                textHighlight:["mainNavText","mainNavTextHigh","mainNavText"], 
                contentMargin:"mainContentSmall",
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (        
            <div>
                <div className = 'mainTop'>
                    <div className = 'mainLogo'>
                        {/* <div className = 'mainLogoText'>LOGO</div> */}
                        <img src="/logo.png" style={{'width':'100%'}}></img>
                    </div>
                    <div className = 'mainBlank'>
                        <div></div>
                    </div>
                    <div className = 'mainSearch'>
                        <FaSearch className = 'searchIcon' color={'black'} size={24} onClick={this.toggleSearch}/>
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
                            <div className={this.state.textHighlight[0]} id={'b1'} onClick={this.changeGood}>최신</div>
                        </div>
                        <div>
                            <div className={this.state.textHighlight[1]} id={'b2'} onClick={this.changeGood}>검색</div>
                        </div>
                        <div>
                            <div className={this.state.textHighlight[2]} id={'b3'} onClick={this.changeGood}>보관</div>
                        </div>     
                    </div>                    
                </div>
                    <div className="mainSearchBarContainer">
                        {this.state.showSearch ? 
                        <div className='mainSearchBar'><SearchBar changeSearch={this.changeSearch}/></div>
                        : null}
                    </div>
                    {this.state.isLogin && !this.state.showAddItem ?
                    <div className='mainAdd' onClick={this.toggleAddItem}>
                        <Tooltip title="물품 등록하기" aria-label="물품 등록하기" >
                            <Fab color="primary" aria-label="add">
                            <AddIcon />
                            </Fab>
                        </Tooltip> 
                    </div>
                    : null
                }
                <div className = {this.state.contentMargin}>
                   
                    {
                    this.state.showGood ? 
                    <div className = 'mainList'>
                        <ListGood isLogin={this.state.isLogin} username={this.state.username} search={this.state.search}/>
                    </div>:
                    <div className = 'mainList'>
                        <List isLogin={this.state.isLogin} username={this.state.username} search={this.state.search}/>
                    </div>
                    }
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
                    content={<AddItem closePopup={this.toggleAddItem} username={this.state.username} reload={this.reload}/>}
                />
                : null
                }
                
                

            </div>
        )
    }
}


export default withStyles(styles, { withTheme: true })(Main);