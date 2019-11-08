import React from 'react';
import DatePicker from "react-datepicker";
import './Profile.css';
import 'react-datepicker/dist/react-datepicker.css';
import server from '../dataSend/userProfileLoad';
import {Button} from '@material-ui/core/';
import Comment from '../Comment/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: {author:{},availableDates:[0], comments:[],likes:[]},
            date: null,
            startDate: null,
            endDate: null,
        }
    }
    setItem = (item) => {
        this.setState({
            item: item,
        })
    }

    reload = () => {
        server.productRead(this.props._id,this.setItem);
    }
    componentDidMount () {
        this.reload();
    }

    sendLike = () => {
        server.sendLike(this.props.username,this.state.item._id, this.reload);
    }

    setStartDate= (date) => {
        this.setState({startDate:date})
    }
    setEndDate= (date) => {
        this.setState({endDate:date})
    }

    borrowSubmit = () => {
        if(this.state.startDate === null && this.state.endDate===null){
            alert("날짜가 비었습니다!");
            return 0;
        }
        else if (this.props.isLogin ==false){
            alert("로그인 해주세요");
            return 0;
        }
        else{
            server.rent(this.state.item._id,this.props.username,
                this.state.startDate.toISOString().substr(0,10),
                this.state.endDate.toISOString().substr(0,10));
            this.props.togglePopup();
        }
    }

    render(){
        return(
            <div>
                {this.state.item != null ? <div>
                <div className='profileBox'>
                    <div className = 'profileImageBox'>
                        <img className = 'profileImage' 
                        src = {'https://khuthon.s3.ap-northeast-2.amazonaws.com/' + this.state.item.productImage}
                        onError={(event)=>{event.target.src = 'https://i.imgur.com/HTtPYah.jpg'}}
                        />
                    </div>
                    
                </div>
                <div className='profileLike'>
                    { !this.state.item.likes.find((data)=> (data.username == this.props.username)) && this.props.isLogin ? 
                    <Button variant="outlined" color="secondary" fullWidth onClick={this.sendLike} >
                        <div className='like'><FavoriteIcon />{this.state.item.numOfLikes}</div>
                    </Button> :
                    <Button disabled variant="outlined" color="secondary" fullWidth >
                    <div className='like'><FavoriteIcon />{this.state.item.numOfLikes}</div>
                    </Button>
                    }
                    
                </div>  
                <div className = 'profileBrief'>                          
                        <table className="type04">
                            <tbody>
                            <tr>
                                <th scope="row">이름</th>
                                <td>{this.state.item.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">설명</th>
                                <td>{this.state.item.content}</td>
                            </tr>
                            <tr>
                                <th scope="row">위치</th>
                                <td>{this.state.item.location + ' ' + this.state.item.subLocation}</td>
                            </tr>
                            <tr>
                                <th scope="row">가격</th>
                                <td>{this.state.item.price}원</td>
                            </tr>
                            <tr>
                                <th scope="row">판매자</th>
                                <td>{this.state.item.author.nickname}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="checkDay">
                            <div className="chcekDayText">
                                대여 가능 날짜 확인
                            </div>
                            <div className= 'pick'>
                            <div className='start'>
                            <div className='end'>대여 시작 일자</div>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={date => this.setStartDate(date)}
                                selectsStart
                                includeDates={this.state.item.availableDates.map(date => new Date(date))}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                minDate={new Date()}
                                dateFormat="yyyy/MM/dd"
                                placeholderText="시작 날짜"
                                disabledKeyboardNavigation
                            />
                            </div>
                            <div className='start'>
                            <div className='end'>대여 종료 일자</div>
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={date => this.setEndDate(date)}
                                selectsEnd
                                includeDates={this.state.item.availableDates.map(date => new Date(date))}
                                endDate={this.state.endDate}
                                startDate={this.state.startDate}
                                minDate={this.state.startDate}
                                dateFormat="yyyy/MM/dd"
                                placeholderText="끝 날짜"
                                disabledKeyboardNavigation
                            />
                            </div>
                            </div>
                            <div className = 'borrowButton'>
                                <Button onClick={this.borrowSubmit} variant="contained"
                                 color="primary" fullWidth={true}>대여하기
                                 </Button>
                            </div>
                        </div>
                        
                        
                    </div></div>: null}
                    <Comment item={this.state.item} username={this.props.username}/>
            </div>
        )
    }

}