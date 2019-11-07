import React from 'react';
import './Popup.css';
import {FaTimes} from 'react-icons/fa';
import {IconButton } from '@material-ui/core';

export default class Popup extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className='popupBg'> 
                <div className='blank'></div>               
                <div className='popup'>
                    <div className='popupTop'>
                        <div className='popupName'>{this.props.text}</div>
                        <div className='closeButton'>
                        <IconButton onClick={this.props.closePopup} aria-label="delete">
                            <FaTimes  size={25}/>
                        </IconButton>
                        </div>
                    </div>
                    <div className='popupInner'>
                        {this.props.content}
                    </div>
                </div>  
                <div className='blank'></div> 
            </div>
        );
    }
}



                /*
                <InfiniteScroll
                    dataLength={this.state.items.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    height={400}
                    className="scroll"
                >
                    {this.state.items.map((i,index)=>(
                        <div key={index}>
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScroll>
 */