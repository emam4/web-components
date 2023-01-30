import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './button.css';

function SpecialButton() {
  const [post, setPost] = useState({})
  const [postID, setPostID] = useState(1)
  const [IDFromButton, setIDButton] = useState(1)

  const clickHandler = () => {
    setIDButton(postID)
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${IDFromButton}`).then((res) => {
    setPost(res.data)    
    })
    .catch(err => {
      console.log(err)
    })
  },[IDFromButton])
  return (
    <div>
      <p>{post.title}</p>
      <input placeholder='Type post id' onChange={e=> setPostID(e.target.value)} />
      <button type='button' onClick={clickHandler}>set post ID</button>
    </div>
  )
}

export default SpecialButton