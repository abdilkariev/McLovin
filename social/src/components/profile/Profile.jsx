import React from 'react';
import gon from './profile.module.css'
import MyPosts from './myposts/MyPosts'

const Profile = () => {
    return       <div className={gon.content}>
    <div>
      ava + desc
    </div>
    <MyPosts />
  </div>
}

export default Profile;