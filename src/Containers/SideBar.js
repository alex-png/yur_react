import React from 'react';

class SideBar extends React.Component {
    state = {
        toggled: false
    }

    render(){
            return this.state.toggled ?
                <div className="side-bar">
                    <h1>Your name here</h1>
                    <h2>Organizations</h2>
                </div>
                : <div style={{backgroundColor: 'grey'}}>
                    >
                </div>
    }
}

export default SideBar