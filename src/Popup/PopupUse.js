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
                <button onClick={this.togglePopup}>버튼</button>
                {this.state.showPopup ? 
                    <Popup
                        text='물건 정보'
                        closePopup={this.togglePopup}
                        content={this.props.content}
                    />
                : null
                }
            </div>
        );
    }
};