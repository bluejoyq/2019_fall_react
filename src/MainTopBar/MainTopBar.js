import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FaSearch } from "react-icons/fa";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class MainTopBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            auth: true,
            setAuth: true,
            anchorEl: null,
            setAnchorEl: null,
        }
    }
    handleChange = (event) => {
        this.setState ({
            setAuth: event.target.checked
        });
        
    };

    handleMenu = (event) => {
        this.setState({
            setAnchorEl: event.currentTarget
        });

    };

    handleClose = () => {
        this.setState({
            setAnchorEl: null
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
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
                            <div className='mainProfileText' onClick={this.newuser}>회원가입</div>
                            </div>
                        }
                    </div>
                </Toolbar>
              </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainTopBar);