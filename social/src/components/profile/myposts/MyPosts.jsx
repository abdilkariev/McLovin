import React from 'react';
import gon from './MyPosts.module.css'
import Post from './posts/Post';

const MyPosts = () => {
    return  (  
       <div> 
          My posts 
          <div> 
             <textarea></textarea>
             <button>Add post</button>
          </div>

      <div className={gon.posts}>
         <Post message='Hi, how are you?' like='15' />
         <Post message="My first time" like='20' />
      </div>
      </div> )
}

export default MyPosts;