import React from 'react';
import SideBar from './SideBar'
import Top from '../Components/Top'
import '../main.css'

function Main() {
    return (
        <div className="main">
            <SideBar />
            <div name="Body">
                <Top style={{pointerEvents: "none"}}/>
            </div>
        </div>)
}

export default Main