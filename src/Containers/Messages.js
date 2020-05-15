import React from 'react'
import Message from '../Components/Message'

export default class Messages extends React.Component {
    state = ({
        loaded: false,
        messages: []
    })



    render() {
        return (
            <div className="messages">
                <div style={{ height: "30em" }} />
                {this.state.messages.map(obj => {
                    return <Message message={obj} />
                })}
                <div id="bottom" ref={(el) => { this.messagesEnd = el; }} />
            </div>
        )
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => ({
                messages: [...prevState.messages, {
                    "message": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus leo, mattis quis viverra ut, varius non enim. Pellentesque sed mollis elit, tempus facilisis odio. Sed hendrerit aliquet mauris a maximus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse luctus ligula nisi, vitae varius lectus pulvinar ut. Donec magna nunc, lobortis ac posuere id, vulputate a erat. In lorem lectus, pharetra in feugiat vitae, molestie quis augue. Pellentesque eu augue erat. Phasellus nisl neque, vestibulum ut porttitor suscipit, convallis at mi. Ut ultrices ornare urna, sit amet pharetra sapien eleifend ut. Proin nec gravida orci. Ut lorem quam, convallis ac vulputate sed, hendrerit id mauris..`, "id": 2
                }]
            }))
        }, 5000)
    }
}