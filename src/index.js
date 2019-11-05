import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PopupUse from './Popup/PopupUse';
import Scroll from './Scroll/Scroll';
import Search from './Search/Search';

ReactDOM.render(
    <PopupUse />,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
