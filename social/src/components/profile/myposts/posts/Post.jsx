import React from 'react';
import gon from './Post.module.css'

const Post = (props) => {
    return  (    
      <div className={gon.item}>
        <img src="https://data.whicdn.com/images/310303764/original.png" alt="" />
        {props.message}
        <div>
        <span>likes {props.like}</span>
        </div>
     </div> )
}

export default Post;