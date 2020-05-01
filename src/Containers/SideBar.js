import React from 'react';
import Top from '../Components/Top.js'
import SideBarSection from '../Components/SideBarSection.js'
function SideBar() {
    return (
        <div className="side-bar">
            <Top name='Alex' org="flatiron" />
            <SideBarSection>
                <p>
                    "Hey Yo my name is Al"
                </p>
            </SideBarSection>
        </div>
    )
}

export default SideBar