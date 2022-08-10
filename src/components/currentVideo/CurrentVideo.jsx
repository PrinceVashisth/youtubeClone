import './currentVideo.css';
import {format} from 'timeago.js';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { GrDislike, GrLike } from 'react-icons/gr';
import {GoReport } from 'react-icons/go';
export default function CurrentVideo({Video}){
  const user = useSelector((state)=>state.user.userInfo);
const [Channel,setChannel] = useState({});
const [subscriber,setSubscriber]=useState(false);
useEffect(()=>{
     setSubscriber(false);
  const fetchChannel = async()=>{
     const res = await axios.get(`/channel?userId=${Video.userId}`); 
     setChannel(res.data);
     setSubscriber(true);
  }
  fetchChannel();
},[Video]);

// Handellers
const SubscribeHandeller = async()=>{
     await axios.put(`/user/${Channel._id}`,{userId:user._id});
}
const LikeHandeller=async()=>{
     await axios.put(`/user/like/${Video._id}`,{userId:user._id});
}
const ReportsHandeller=async()=>{
  const res = await axios.put(`/user/report/video/${Video._id}`,{userId:user._id});
  console.log(res.data);
  console.log("clicked ReportsHandeller");
}
const PF = 'http://localhost:3000/';
  return (
    <>
                  <img src={`${PF}${Video.video}`} className='VideoPlay' alt=''/>
            <div className="controlbar">
            </div>      
            <div className="videoBar">
                <div className="currVideoTitle">{Video.title}</div>
                <span className="currentVideoViews">{Video.views.length} views </span>
                <span className="currentVideoTime">  {format(Video.createdAt)}</span>
                <div className="videodesc">{Video.desc}</div>
            </div>
            <div className="channelInfoNLike">
            {
                subscriber?
                <div className="channelInfo">
                     <Link to={`/profile/${Channel.channelName}`} > <img src={`${PF}assets/${Channel.channelImg}`} alt="" className='Vchannelimg' /> </Link>   
                        <div className="cinfo">
                            <div className="cname">{Channel.channelName}</div>
                            <div className="csubsnum">{Channel.subscribers.length} Subscribers</div>
                        </div>
            {
              user?     
                        <div className="SubscribeIt">
                            <button onClick={SubscribeHandeller} >subscribe</button>
                        </div>
              :null
            }

                </div>
                :
                null
            }
{
  user?

            <div className="LikeAndUnlikeAndOther">
               <div className="likeSection">
                 <span className='likesCount'>{Video.likes.length} likes</span>
                  <GrLike size={24} color="black" onClick={LikeHandeller} />
               </div>
               <div className="likeSection">
               <span className='likesCount'>{Video.likes.length} unlikes</span>
                  <GrDislike size={24} color="black" />
               </div>
               <div className="reportVideo">
               <span className='reportsCount' onClick={ReportsHandeller}>{Video.reports.length} reports</span>
                <GoReport size={25}  />
               </div>
            </div>
  :null
}
            </div>
    </>
  )
}
