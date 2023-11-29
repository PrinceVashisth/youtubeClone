import axios from 'axios';
import { useEffect, useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import './video.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {format} from 'timeago.js';
import ReactPlayer from 'react-player';
export default function Video({props}) {
const user = useSelector((state)=>state.user.userInfo);  
const [channel,setChannel]= useState({});
  useEffect(()=>{
    const FetchChennel=async()=>{
     const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/channel?userId=${props.userId}`);
     setChannel(res.data);
    }
    FetchChennel();
   },[props]);

const ViewsHandeller=async()=>{
  user ?await axios.put(`https://yt-clone-vciw.onrender.com/api/user/video/${props._id}`,{userId:user._id}): await axios.put(`https://yt-clone-vciw.onrender.com/api/user/video/${props._id}`,{userId:user});
}


const AddLibraryHandeller=async()=>{
  await axios.post(``);
}


const ReportHandeller=async()=>{
 const res = await axios.put(`https://yt-clone-vciw.onrender.com/api/user/report/video/${props._id}`,{userId:user._id});
 console.log(res.data);
}


const shareHandeller=async()=>{
  await axios.post(``);
}

const WatchHandeller=async()=>{
  await axios.post(``);
}

  return (
    <>
         <div className="video">
     <Link to={`/video/${props._id}`}> <img src={`${props.thumbnail}`} alt="" className="imgVideo"  onClick={ViewsHandeller}/> </Link>
        <span className="timing">2:30</span>
        <div className="videoDesc">
          <div className="descTop">
          <img src={`${channel.channelImg}`} alt="" className="channelImg" />
          <span className="titleOfVideo">
            {props.title}
          </span>
          <div className="MoreDetailsInVideo">
          <FiMoreVertical className='moreDetails' />
      {user? <div className="VideoOptions" >
        <div className="optionItem" onClick={AddLibraryHandeller}>All to Library</div>
        <div className="optionItem" onClick={ReportHandeller}>Report A Video</div>   
        <div className="optionItem" onClick={shareHandeller}>Share A Video</div>   
        <div className="optionItem" onClick={WatchHandeller}>Add To Watch Later</div>
          </div>:null}
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
