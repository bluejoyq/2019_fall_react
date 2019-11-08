import React from 'react';
import DatePicker from "react-datepicker";
import './Profile.css'
import 'react-datepicker/dist/react-datepicker.css';
import server from '../dataSend/userProfileLoad';
import {Button} from '@material-ui/core/'

export default class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item: {author:{},availableDates:[]},
            date: null,
        }
    }
    setItem = (item) => {
        this.setState({
            item: item,
        })
    }

    componentDidMount () {
        server.productRead(this.props._id,this.setItem);
    }
    

    handleChange = (date) => {
        this.setState({
            date: date
        });
    };

    borrowSubmit = () => {
        if(this.state.date === null){
            alert("날짜가 비었습니다!");
            return 0;
        }
        else{
            alert("예약 성공!");
            this.props.togglePopup();
        }
    }

    render(){
        return(
            <div>
                {this.state.item != null ? <div><div className='profileBox'>
                    <div className = 'profileImageBox'>
                        <img className = 'profileImage' 
                        src = {'https://khuthon.s3.ap-northeast-2.amazonaws.com/' + this.state.item.productImage}
                        onError={(event)=>{event.target.src = 'https://i.imgur.com/HTtPYah.jpg'}}
                        />
                    </div>
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
                            <DatePicker id='borrowDate' 
                            dateFormat="yyyy/MM/dd"
                            selected={this.state.date} 
                            onChange={this.handleChange} 
                            includeDates={this.state.item.availableDates.map(date => new Date(date))}
                            minDate={new Date()}
                            placeholderText="날짜를 골라주세요"
                            withPortal
                            disabledKeyboardNavigation
                            />
                            <div className = 'borrowButton'>
                                <Button onClick={this.borrowSubmit} variant="contained" color="primary" >대여하기</Button>
                            </div>
                        </div>
                        
                    </div></div>: null}
                
                    
            </div>
        )
    }

}