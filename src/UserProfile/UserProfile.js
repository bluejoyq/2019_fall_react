import React from 'react';
import './UserProfile.css';
import server from '../dataSend/userProfileLoad';


export default class UserProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            account :{}
        }
        
    }
    setAccount=(account)=>{
        this.setState({
            account:account,
        });
    }
    
    componentDidMount () {
        server.userRead(this.props.username,this.setAccount);
    }
    
    render() {
        return (
            <div>
                <div className='profileBox'>
                    <div className = 'profileImageBox'>
                        <img className = 'profileImage' 
                        src = {'https://evening-peak-07863.herokuapp.com/'+this.state.account.profileImage}
                        onError={(event)=>{event.target.src = 'https://i.imgur.com/HTtPYah.jpg'} }
                        />
                    </div>
                </div>
                <div className = 'profileBrief'>                          
                    <table className="type04">
                        <tbody>
                        <tr>
                            <th scope="row">아이디</th>
                            <td>{this.state.account.username}</td>
                        </tr>
                        <tr>
                            <th scope="row">닉네임</th>
                            <td>{this.state.account.nickname}</td>
                        </tr>
                        <tr>
                            <th scope="row">소개</th>
                            <td>{this.state.account.profileMessage}</td>
                        </tr>

                        </tbody>
                    </table>
                        
                 </div>
            </div>
        )
    }
}