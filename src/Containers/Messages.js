import React from 'react'
import Message from '../Components/Message'

export default class Messages extends React.Component {
    state = ({
        loaded: false,
        userMessage: "",
        messages: [],
    })



    render() {
        return (
            //chatroom
            <div className="chat-room">
                {/* messages */}
                <div className="messages">
                    <div id="top-filler" style={{ height: "30em" }} />
                    <ul>
                        {this.state.messages.map((obj, index) => {
                            return <Message message={obj} key={index} />
                        })}
                    </ul>
                    <div id="bottom-filler" ref={(el) => { this.messagesEnd = el; }} />
                </div>

                {/* messages */}
                <form className="input-section">
                    <textarea className='chat-input' value={this.state.userMessage} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                </form>
            </div>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.userMessage === ""){
            return
        }

        let userMessage = this.state.userMessage;
        console.log(this.state.messages, this.state.userMessage)
        this.setState((prevState) => ({
            userMessage: "",
            messages: [...prevState.messages, {message: userMessage, loading: true}]
            })
        )
        //send userMessage to backend
    }

    handleChange = (e) => {
        this.setState({
            userMessage: e.target.value
        })
    }
    handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            this.handleSubmit(e)
        }
    }


    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    componentDidUpdate() {
        debugger
        this.scrollToBottom();
    }

    componentDidMount() {
        let times = 40
        for (let i = 0; i < times; i++) {
            fetch("https://dad-jokes.p.rapidapi.com/random/jokes", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                    "x-rapidapi-key": "1412674dbamshf08f57c087885b2p16dcd9jsnebaffc814179"
                }
            })
                .then(res => {
                    return res.json()
                }).then((json) => {
                    json["id"] = i
                    this.setState(prevState => ({
                        messages: [...prevState.messages, json]
                    }))
                }).then(() => {
                    //reordering messages by timestamp
                    if (this.state.messages.length % 2 === 0) {
                        let unorderedState = [...this.state.messages]
                        let orderedState
                        console.log("ordering...")
                        orderedState = unorderedState.sort((a, b) => {
                            if (a.id > b.id) return 1;
                            if (a.id < b.id) return -1;
                            return 0;
                        })

                        this.setState({
                            messages: orderedState
                        })

                    }//end of if
                }) //end of then
                .catch(err => {
                    console.log("ERROR!", err);
                });
        }
    }
}