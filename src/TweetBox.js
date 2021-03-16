import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from './firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Elon Musk',
      userName: 'elonmusk',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvdl382q8a8hXT9ZSG6hASePoNH_bqAa4Lg&usqp=CAU' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type='text'
            placeholder='What is Happening?'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          type='text'
          placeholder='Enter Image Url'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
