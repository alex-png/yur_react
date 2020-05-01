import React from 'react'

function SideBarSection(props){
    return(
        <div className="side-bar-section">
            {props.children}
        </div>
    )
}
export default SideBarSection