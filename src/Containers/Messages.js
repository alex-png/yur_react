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
                {this.state.messages.map(obj => {
                    return <Message message={obj} />
                })}
            </div>
        )
    }


    componentDidMount() {
        let times = 25
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
                })
                .catch(err => {
                    console.log("ERROR!", err);
                });
        }
    }
}