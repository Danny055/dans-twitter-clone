import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:"Danny Rodz",
            username:"danny404",
            verified: true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"data:image/jpeg;base64,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"
        });
        setTweetImage("");
        setTweetMessage("");
    };
    return <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                <Avatar src=""/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"/>
                </div>
                <input 
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" 
                placeholder="Enter image URL" 
                type="text"/>

                <Button onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    
}

export default TweetBox
