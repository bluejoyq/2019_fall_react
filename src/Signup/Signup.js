import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import server from '../dataSend/userProfileLoad';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        D.COM BlackCompany
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            nickname: '',
            email: '',
        };
    }

    handleUserNameChange = (event) => {
        this.setState({username: event.target.value});
    }
    handlePwChange = (event) => {
        this.setState({password: event.target.value});
    }
    handleNameChange = (event) => {
        this.setState({nickname: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    handleSubmit = (event) => {
        server.signup(this.state.username,this.state.password,this.state.nickname,this.state.email)
        this.props.closePopup();
        event.preventDefault();
    }

    change = ()=>{
      this.props.closePopup();
      this.props.changePopup();
    }
    render(){
        const { classes } = this.props;
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                회원가입
              </Typography>
              <form className={classes.form} validate={"true"} onSubmit={this.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="아이디"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      onChange={this.handleUserNameChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="비밀번호"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={this.handlePwChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="nickname"
                      name="nickname"
                      variant="outlined"
                      required
                      fullWidth
                      id="nickname"
                      label="닉네임"
                      onChange={this.handleNameChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="이메일"
                      name="email"
                      autoComplete="email"
                      onChange={this.handleEmailChange}
                      type='email'
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  회원가입
                </Button>
                <Grid container>
                  <Grid item>
                    <Link onClick={this.change} style={{cursor:'pointer'}} variant="body2" >
                      {"이미 계정이 있으신가요?"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Signup);