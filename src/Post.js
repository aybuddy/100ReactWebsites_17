import { Avatar } from '@material-ui/core';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from '@material-ui/icons';
import React from 'react';
import './Post.css';

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvdl382q8a8hXT9ZSG6hASePoNH_bqAa4Lg&usqp=CAU' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Elon Musk{' '}
              <span className='post__headerSpecial'>
                <VerifiedUser className='post__badge' />
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>This is a Twitter clone made with React</p>
          </div>
        </div>
        <img
          src='https://media.giphy.com/media/vQS8z5J8qrCAE/giphy.gif'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutline fontSize='small' />
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <Publish fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
