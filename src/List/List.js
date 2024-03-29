import React from 'react';
import './List.css';
import Item from '../Item/Item';
import server from '../dataSend/userProfileLoad';

export default class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }

    setItems=(datas)=>{
        this.setState({
            items: datas
        });
    }
    componentDidMount(){
        server.productReadAll(this.setItems);
    }

    render(){

        return(
            <div className='flexContainer'>
                {
                this.state.items.map( ( data ) => (
                    data.author !== null && data.isOpen 
                    && data.location.indexOf(this.props.search.do) != -1
                    && data.subLocation.indexOf(this.props.search.gu) != -1
                    && data.title.indexOf(this.props.search.keyword) != -1
                    ? 
                    <Item item={data} key={data._id}
                        isLogin={this.props.isLogin} username={this.props.username}
                        openPopup={()=>{}}/> : null
                ))
                }
            </div>
        )
    }
}