import React from 'react';
import Top from '../Components/Top.js'
import SideBarSection from '../Components/SideBarSection.js'
function SideBar() {
    return (
        <div className="side-bar">
            <Top>
                <div>
                    <h2 style={{ margin: '0' }}>Flatiron School<span>⌄</span></h2>
                    <span style={{color: "rgb(171, 173, 175)"}}>Alex Rodriguez</span>
                </div>
            </Top>
            <SideBarSection>
                <h3> ▾ Groups</h3>
            </SideBarSection>

            <SideBarSection>
                <h3> ▾ Direct Messages</h3>
            </SideBarSection>
        </div>
    )
}

export default SideBar