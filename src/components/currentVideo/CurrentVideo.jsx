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
const [subscriberbtn,setSubscriberbtn]=useState(false);

useEffect(()=>{
     setSubscriber(false);
  const fetchChannel = async()=>{
     const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/channel?userId=${Video.userId}`); 
     setChannel(res.data);
     setSubscriber(true);
     setSubscriberbtn(user?res.data.subscribers.includes(user._id)?true:false:false);
    }
  fetchChannel();
  
},[Video,subscriberbtn]);
// Handellers
const SubscribeHandeller = async()=>{
     await axios.put(`https://yt-clone-vciw.onrender.com/api/user/${Channel._id}`,{userId:user._id});
     setSubscriberbtn(!subscriberbtn);
}
const LikeHandeller=async()=>{
     await axios.put(`https://yt-clone-vciw.onrender.com/api/user/like/${Video._id}`,{userId:user._id});
}
const ReportsHandeller=async()=>{
  await axios.put(`https://yt-clone-vciw.onrender.com/api/user/report/video/${Video._id}`,{userId:user._id});
}

const likeBtn={
  color:'red'
}
  return (
    <>          
            <video width="1000" height="500" controls autoPlay="true" key={Video._id} >
                  <source src={`${Video.video}`} type="video/mp4"/>
            </video>
           
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
                     <Link to={`/profile/${Channel.channelName}`} > <img src={`${Channel.channelImg}`} alt="" className='Vchannelimg' /> </Link>   
                        <div className="cinfo">
                            <div className="cname">{Channel.channelName}</div>
                            <div className="csubsnum">{Channel.subscribers.length} Subscribers</div>
                        </div>
            {
              user?     
                        <div className="SubscribeIt">
                            <button onClick={SubscribeHandeller}>{subscriberbtn?"subscribed":"subscribe"}</button>
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
                  <GrLike size={24}  onClick={LikeHandeller} style={likeBtn} />
               </div>
               <div className="likeSection">
               <span className='likesCount'>{Video.likes.length} unlikes</span>
                  <GrDislike size={24} color="black" />
               </div>
               <div className="reportVideo">
               <span className='reportsCount' >{Video.reports.length} reports</span>
                <GoReport size={25} onClick={ReportsHandeller} />
               </div>
            </div>
  :null
}
            </div>
    </>
  )
}
