import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BottomProfile from "../BottomProfile/BottomProfile";
import './Profiles.css';
export const ProfileChannel = ({channelName})=>{
    const user = useSelector((state)=>state.user.userInfo); 
    const [channel,setChannel] = useState([]);
    const [Show,SetShow] = useState(true);
    const [Subscribebtn,SetSubscribeBtn] = useState(false);
     useEffect(()=>{
       const fetchChannel=async()=>{
           const res = await axios.get(`/channel?name=${channelName}`);
           setChannel(res.data);
           SetSubscribeBtn(user?res.data.subscribers.includes(user._id)?true:false:false);
           SetShow(false);
       }
       fetchChannel();
    },[channelName,Subscribebtn]);

const subscriberHandeller=async()=>{ await axios.put(`/user/${channel._id}`,{userId:user._id}); SetSubscribeBtn(!Subscribebtn) }     

const ProfileHeader =()=>{
  return(
    <>
  <div className="profileheader">
  <div className="profileimg">
      <img src={`${PF}${channel.channelImg}`} alt="" className='CoverProfileImg'/>
  </div>
  <div className="profilepanel">
  <img src={`${PF}${channel.channelImg}`} alt="" className='ProfileImg'/>
       <div className="Aboutchannel">
       <div className="channelName">{channelName}</div>
       <div className="subscribers">{ Show?" ":channel.subscribers.length}  subscribers </div>
       </div>
    {user?(user.name!==channelName)?<button onClick={subscriberHandeller} className="SubscribersBtn">{Subscribebtn?"Subscribed":"subscribe"}</button>:null:null}
  </div>
</div>
</>
  )
}

const ProfileNavbar = ()=>{
  const [Value,SetValue] = useState("Home");
  const ProfileBottomHandeller=(e)=>{
     SetValue(e.target.innerHTML);
  }
  return(
    <>
          <div className="profileNavbar">
            <div className="profileItems" onClick={ProfileBottomHandeller}>
              <div className="profileItem">Home</div>
              <div className="profileItem">Videos</div>
              <div className="profileItem">Channels</div>
              <div className="profileItem">About</div>
            </div>
          </div>  
          <BottomProfile props={Value}/> 
    </>
  )
}

const PF = 'http://localhost:3000/assets/';
return(
      <>
        <ProfileHeader/>
        <ProfileNavbar/>
       </>   
    )
}

export const ProfileUser=()=>{
    return(
      <>
       <p> </p>
      </>
    )
}