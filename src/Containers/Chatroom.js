import React from 'react'
import Messages from './Messages'

class Chatroom extends React.Component {
    state = {
        message: "",
        userSent: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let message = this.state.message;
        //send message to backend
        console.log(message)
        this.setState({ message: "" })
    }

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            this.handleSubmit(e)
        }
    }

    render() {
        return (
            <div className="chat-room">
                <Messages />
                <form className="input-section">
                    <textarea className='chat-input' value={this.state.message} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                </form>
            </div>


        )
    }
}

export default Chatroom