import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './RecommendedVideo.css';
import { format } from 'timeago.js';
import { useSelector } from 'react-redux';
export default function RecommendedVideo({video}) {
const user = useSelector((state)=>state.user.userInfo);  
const PF = 'http://localhost:3000/';
const [channel,setChannel]= useState([]);
useEffect(()=>{
    const fetchChannel = async()=>{
     const res = await axios.get(`/channel?userId=${video.userId}`);
     setChannel(res.data);
    } 
    fetchChannel();  
},[video]);

const viewHandeller = async()=>{
  if(user){
     await axios.put(`/user/video/${video._id}`,{userId:user._id});
    
  }else{
     await axios.put(`/user/video/${video._id}`,{userId:user});
  }
  // window.location.reload();
}

  return (
    <>
      <div className="recommendedVideo" onClick={viewHandeller}>
        <div className="recommendedimg">
          <img src={`${PF}${video.thumbnail}`} alt="" />
        </div>
        <div className="recommendedVideoDesc">
        <div className="recommendedVideoTitle">{video.title}</div>
        <div className="recommendedVideocname">{channel.channelName}</div>
        <span className='views'>{video.views.length} views</span>
        <span className='sep'></span>
        <span className='time'>{format(video.createdAt)}</span>
        </div>
      </div>
    </>
  )
}
