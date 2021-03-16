import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

      <Post />
    </div>
  );
};

export default Feed;
