import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
          <div className="widget__input">
              <SearchIcon className="widgets__searchIcon"/>
            <input placeholders="Search Twitter" type="text" />
          </div>

          <div className="widgets__widgetContainer">
              <h2>What's happening</h2>
              <TwitterTweetEmbed tweetId={"1437577991052308482"}/>
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="twitter"
            options={{height: 400}}
            />
            <TwitterShareButton 
            url ={""}
            options={{text:"#reactjs is awsome", via:"cleverqazi"}}
            />
          </div>
        </div>
    )
}

export default Widgets
