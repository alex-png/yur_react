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
                <div id="top-filler" style={{ height: "30em" }} />
                <ul>
                    {this.state.messages.map((obj, index) => {
                        return <Message message={obj} key={index} />
                    })}
                </ul>
                <div id="bottom-filler" ref={(el) => { this.messagesEnd = el; }} />
            </div>
        )
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "auto" });
    }

    componentDidUpdate() {
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