import React from 'react';
import SideBar from './SideBar'
import Top from '../Components/Top'
import '../main.css'
import Chatroom from './Chatroom';

function Main() {
    return (
        <div className="main">
            <SideBar />
            <div name="Body">
                <Top/>
                <Chatroom />
            </div>
        </div>)
}

export default Main