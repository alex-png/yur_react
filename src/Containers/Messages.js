import React from 'react'
import Message from '../Components/Message'

export default class Messages extends React.Component {
    state = ({
        loaded: false,
        messages: [{"message":`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus leo, mattis quis viverra ut, varius non enim. Pellentesque sed mollis elit, tempus facilisis odio. Sed hendrerit aliquet mauris a maximus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse luctus ligula nisi, vitae varius lectus pulvinar ut. Donec magna nunc, lobortis ac posuere id, vulputate a erat. In lorem lectus, pharetra in feugiat vitae, molestie quis augue. Pellentesque eu augue erat. Phasellus nisl neque, vestibulum ut porttitor suscipit, convallis at mi. Ut ultrices ornare urna, sit amet pharetra sapien eleifend ut. Proin nec gravida orci. Ut lorem quam, convallis ac vulputate sed, hendrerit id mauris.

        Etiam ultricies metus id sem auctor, ut eleifend mi pellentesque. Curabitur ultrices elementum eleifend. Vivamus tincidunt ante ut mi feugiat, vel iaculis lacus iaculis. Suspendisse potenti. Morbi ac lectus porttitor, ullamcorper ligula quis, tincidunt felis. Praesent vehicula ipsum quis diam auctor venenatis. Vestibulum quis venenatis augue. Sed viverra metus quis orci vulputate iaculis volutpat ac justo. Morbi luctus nisi in volutpat eleifend. In in risus ante. In vel odio urna. Cras scelerisque nisi eget justo eleifend, quis pharetra nibh bibendum. Pellentesque at auctor purus. Ut sed sem sodales, dapibus augue ac, hendrerit felis.
        
        Quisque commodo cursus velit. Aenean vehicula sem rutrum, suscipit augue ut, ullamcorper mauris. Vivamus aliquam est at lectus vestibulum finibus. Aenean ullamcorper, enim et eleifend blandit, augue nulla pretium felis, id pulvinar elit est ut tellus. Quisque interdum id est pretium porta. Aenean non diam feugiat, fringilla tellus nec, porta risus. Aliquam erat volutpat. Cras bibendum elit diam, vitae sagittis leo efficitur vitae. Fusce euismod odio ut quam blandit, vitae auctor ex lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent gravida mollis nulla, et tincidunt orci porttitor vel. Nam ut malesuada odio. Vestibulum mollis enim in nibh aliquet, at semper ipsum pulvinar. Etiam vulputate urna massa.
        
        Suspendisse potenti. Proin eleifend velit quis volutpat ullamcorper. Ut fermentum massa nibh, ut volutpat tellus malesuada porttitor. Vivamus pharetra quis nibh id feugiat. Suspendisse neque velit, interdum sed turpis nec, maximus feugiat tellus. Quisque odio libero, convallis vel turpis vel, viverra elementum orci. Fusce lobortis, lorem non sagittis euismod, tellus magna luctus purus, eu placerat lorem nisl non ex. Vivamus imperdiet tellus sit amet enim rhoncus luctus. Praesent sagittis arcu vulputate cursus ultrices. Phasellus auctor volutpat massa ullamcorper fringilla. Sed pellentesque felis est, luctus maximus quam rhoncus eu.
        
        Cras id consectetur augue. Pellentesque commodo risus at enim tempor ultricies. Suspendisse pulvinar porttitor diam at iaculis. Donec at pharetra nisl, fermentum venenatis dolor. Ut urna neque, tempor eget felis lobortis, efficitur sodales risus. Cras non tortor vitae enim tincidunt elementum. Fusce ac leo odio. In hac habitasse platea dictumst. Ut tempus finibus lacus ac congue. Aliquam non arcu in ante hendrerit commodo vitae nec elit. Aliquam nec maximus elit, et egestas odio. Duis in imperdiet arcu. Nunc diam sem, finibus a luctus at, sodales a lorem. Ut lectus enim, auctor nec orci eu, eleifend dictum nibh. Ut viverra consequat turpis, at pretium neque finibus sed.`, "id":2}]
    })



    render() {
        return (
            <div className="messages">
                {this.state.messages.map(obj => {
                    return <Message message={obj} />
                })}
                <div className="bottom-filler" />
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