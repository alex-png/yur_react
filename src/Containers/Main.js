import React from 'react';
import SideBar from './SideBar'
import Top from '../Components/Top'
import '../main.css'
// import Chatroom from './Chatroom';
import Messages from './Messages';
function Main() {
    // let state = ({
    //     enteredOrganizationServer: false
    // })
    
    // let enteredOrganizationServer = ()=>{
        
    // }

    return (
        <div className="main">
            <SideBar />
            
            <div name="Body">
                <Top />
                <Messages />
                {/* <Chatroom /> */}
                {/* {state.enteredOrganizationServer? <Chatroom /> :<div className="waiting-room"><p>Join a server to get started!</p></div>} */}
                
            </div>
        </div>)
}

export default Main