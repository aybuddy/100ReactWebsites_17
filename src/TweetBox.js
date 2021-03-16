import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvdl382q8a8hXT9ZSG6hASePoNH_bqAa4Lg&usqp=CAU' />
          <input type='text' placeholder='What is Happening?' />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Enter Image Url'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
