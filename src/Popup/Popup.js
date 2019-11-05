import React from 'react';
import './Popup.css';
import Scroll from '../Scroll/Scroll';

export default class Popup extends React.Component {
    render() {
        return (
            <div className='popupBg'>
                <div className='popup'>
                    <div className='popupTop'>
                        <div className='popupName'>{this.props.text}</div>
                        <button className='closeButton' onClick={this.props.closePopup}>X</button>
                    </div>
                    <div className='popupInner'>
                        <Scroll/>
                    </div>
                </div>
                
            </div>
        );
    }
}
