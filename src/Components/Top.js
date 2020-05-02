import React from 'react'

function Top(props) {
    
    return (
        <div className={props.togglable? "top-togglable":"top" }>
            <div className='top-content'>
            {props.children}
            </div>
        </div>)
}

export default Top