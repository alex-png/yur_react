import React from 'react'

export default function Message(props) {
    return (
        <li className="message">
            {props["message"].message}
            {props["message"].id}
        </li>
    )
}