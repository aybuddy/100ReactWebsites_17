import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName='Elon Musk'
        userName='elonmusk'
        verified
        text='Man on Mars'
        avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvdl382q8a8hXT9ZSG6hASePoNH_bqAa4Lg&usqp=CAU'
        image='https://media.giphy.com/media/vQS8z5J8qrCAE/giphy.gif'
      />
      <Post />
    </div>
  );
};

export default Feed;
