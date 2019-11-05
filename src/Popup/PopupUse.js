import React from 'react';
import Popup from './Popup';

export default class PopupUse extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }
    togglePopup=()=>{
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='popupuse'>
                <button onClick={this.togglePopup}>show popup</button>
                {this.state.showPopup ? 
                    <Popup
                        text='닫아주세요.'
                        closePopup={this.togglePopup}
                    />
                : null
                }
            </div>
        );
    }
};