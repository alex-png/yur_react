import React from 'react'

export default function Message(props) {
    return (
        <div className = "message">
            {props["message"].message}
            {props["message"].id}
        </div>
    )
}