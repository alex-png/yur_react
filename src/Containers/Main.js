import React from 'react';
import SideBar from './SideBar'
import '../main.css'

class Main extends React.Component{
    state = {
        sideBarToggled: false
    }

    render() {
        return (
            this.state.sideBarToggled ? 
            <div className="main-toggled">
                <SideBar />
                <div name="Body">
                    <h1>Your name here!</h1>
                    <h2>Organizations</h2>
                </div>
            </div> :
            <div className="main-untoggled">
                <SideBar />
            </div>
        )
    }
}

export default Main