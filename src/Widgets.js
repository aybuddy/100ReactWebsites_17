import React from 'react';
import './Widget.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import { Search } from '@material-ui/icons';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1370950463017861123'} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='elonmusk'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={''}
          options={{ text: 'reactjs is awesome', via: 'elonmusk' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
