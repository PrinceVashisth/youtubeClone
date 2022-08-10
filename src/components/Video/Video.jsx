import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import './video.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {format} from 'timeago.js';
export default function Video({props}) {
const user = useSelector((state)=>state.user.userInfo);  
const [channel,setChannel]= useState({});

  useEffect(()=>{
    const FetchChennel=async()=>{
     const res = await axios.get(`/channel?userId=${props.userId}`);
     setChannel(res.data);
    }
    FetchChennel();
   },[props]);

const ViewsHandeller=async()=>{
  user ?await axios.put(`/user/video/${props._id}`,{userId:user._id}): await axios.put(`/user/video/${props._id}`,{userId:user});
}

 const PF = 'http://localhost:3000/';
  return (
    <>
         <div className="video">
     <Link to={`/video/${props._id}`}> <img src={`${PF}${props.video}`} alt="" className="imgVideo"  onClick={ViewsHandeller}/> </Link>
        <span className="timing">2:30</span>
        <div className="videoDesc">
          <div className="descTop">
          <img src={`${PF}assets/${channel.channelImg}`} alt="" className="channelImg" />
          <span className="titleOfVideo">
            {props.title}
          </span>
          <div className="MoreDetailsInVideo">
          <FiMoreVertical className='moreDetails' />
          <div className="VideoOptions" >
        <Link to={`/video/${props._id}`}><div className="optionItem">See this Video</div></Link> 
        <Link to={""}> <div className="optionItem">Report A Video</div></Link>   
        <Link to={""}> <div className="optionItem">Share A Video</div></Link>   
        <Link to={""}> <div className="optionItem">Add To Watch Later</div></Link>   
          </div>
          </div>
          
          </div>
          <div className="descBottom">
         <Link to={`/profile/${channel.channelName}`} style={{textDecoration:'none',color:'grey'}}>
            <div className="labelName">{channel.channelName}</div>
         </Link>
            <div className="videoDetails">
            <span className="views">{props.views.length} views </span>
            <span className='sep'></span>
            <span className="views">{format(props.createdAt)}</span> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
