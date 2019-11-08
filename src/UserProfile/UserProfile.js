import React from 'react';
import './UserProfile.css';
import server from '../dataSend/userProfileLoad';
import Item from '../Item/Item';

export default class UserProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            account :{},
            items:[]
        }
        
    }
    setAccount=(account)=>{
        this.setState({
            account:account,
        });
    }
    setItems=(datas)=>{
        this.setState({
            items: datas
        });
    }
    componentDidMount () {
        server.userRead(this.props.username,this.setAccount);
        server.productReadAll(this.setItems);
    }
    
    render() {
        return (
            <div>
                <div className='profileBox'>
                    <div className = 'profileImageBox'>
                        <img className = 'profileImage' 
                        src = {'https://khuthon.s3.ap-northeast-2.amazonaws.com/'+this.state.account.profileImage}
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
                <div className='myItem'>
                {
                this.state.items.map( ( data ) => (
                    data.author.username === this.props.username
                    ? 
                    <Item item={data} key={data._id}
                        isLogin={this.props.isLogin} username={this.props.username}
                        openPopup={()=>{}}/> : null
                ))
                }
            </div>
            </div>
        )
    }
}