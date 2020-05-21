import React from 'react'

export default function Message(props) {
    if (props["message"].loading) {
        return (
            <li className="message">
                {props["message"].message}
                {props["message"].id}
                <span style={{color: "blue"}}>loading...</span>
            </li>
        )
    } else {
        return (
            <li className="message">
                {props["message"].message}
                {props["message"].id}
            </li>
        )
    }
}