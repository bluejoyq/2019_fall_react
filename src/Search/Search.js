import React from 'react';
import './Search.css';
import Dropdown from 'react-dropdown'
import SearchField from "react-search-field";

const options = [
    '전체', '서울시', '경기도'
]
const defaultOption = options[0]

export default class Search extends React.Component {
    render() {
        return (
            <div>
            <div className='SearchLeft'>
                <div>
                    로고
                </div>
            </div>
            <div className ='SearchCenter'>
                <div className='SearchPlace'>
                    <Dropdown options={options} 
                    onChange={this._onSelect} 
                    value={defaultOption}
                    placeholder="지역"
                    classNames="searchplace"
                    />
                </div>
                <div className='SearchBar'>
                    <SearchField
                    placeholder="Search..."
                    onChange={
                        this.props.searchText
                    }
                    searchText="This is initial search text"
                    classNames="searchbar"
                    />
                    </div>
            </div>
            <div className='SearchRight'>
            <div>
                로그인/회원가입
            </div>
            </div>
            </div>
        );
    }
}