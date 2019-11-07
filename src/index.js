import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PopupUse from './Popup/PopupUse';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import Main from './Main/Main';
import Login from './Login/Login';
import Item from './Item/Item';
import List from './List/List';

const pr = {
    id:120120,
    url:"https://i.imgur.com/IuYasye.jpg",
    name:"asdasdasd231asss",
    category:"뗑컨",
    location:"서울특별시 영등포구",
    price:1111,
    sellerId:"bluejoy",
    canDay:[new Date(),new Date('2019-11-07')],//가능.
}

const option = {_id:1, author:"토사모",title:"햄스터 팝니다~ 선제시 ㄱㄱㄱ", location:"경상남도 거제시", price:100}
let a = <Profile data={pr} />
//<PopupUse  content={a}/>,
//<Item item={option} openPopup={(_id)=>{}}/>,

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
