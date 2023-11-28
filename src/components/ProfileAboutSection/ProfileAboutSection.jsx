import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileAbout from '../profileAbout/ProfileAbout';

export default function ProfileAboutSection() {
 const channelName = useParams().channelName;
 const [Channel,SetChannel] = useState([]);
 const [Views,Setviews] = useState([]);

 useEffect(()=>{
  const fetchChannel =async()=>{
  const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/channel/?name=${channelName}`);
  SetChannel(res.data);
  } 
  fetchChannel();

  const fetchLikes = async()=>{
    const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/channel/channelLikes/${channelName}`);
   Setviews(res.data.flat());
  }
  fetchLikes();
 },[])


  return (
    <div className='ProfileAboutSection'>
       { <ProfileAbout channel={Channel} Views={Views}/> }
    </div>
  )
}
