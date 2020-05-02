import React from 'react'

function Top(props) {
    
    return (
        <div className='top'>
            <div className='top-content'>
            {props.children}
            </div>
        </div>)
}

export default Top