import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fulfilled } from "../../counter/counterSlice";
import BottomProfile from "../BottomProfile/BottomProfile";
import ChannelSkeleton from '../channelSkeleton/ChannelSkeleton';
import ProfileChannels from '../profileChannels/ProfileChannels';
import { ImCross } from "react-icons/im";
import { MdCreateNewFolder } from "react-icons/md";

import './Profiles.css';
import CreateVideo from "../createVideo/CreateVideo";

// if users go to his Profile
export const ProfileUser=()=>{
  const {_id,...others} = useSelector((state)=>state.user.userInfo);
  const [Skeleton,SetSkeleton] = useState(true);
  const [Channel,SetChannel] = useState([]);
  const [Toggle ,setToggle] = useState(false);
  const [image,Setimage] = useState(""); 
  const ChannelName = useRef();
  const ChannelType = useRef();

  const CreateChannel = async(e)=>{

  e.preventDefault();
  const data = new FormData();
  data.append("file",image);
  data.append("upload_preset","YTClone");
  data.append("cloud_name","dnkd8ncit");   
  const respo = await axios.post("https://api.cloudinary.com/v1_1/dnkd8ncit/image/upload",data);
  const img = respo.data.secure_url;
  const Data = {
  channelname : ChannelName.current.value,
  ctype : ChannelType.current.value,
  channelImg :img,
}
    const res = await axios.post(`/channel/${_id}`,Data);
    console.log(res.data);
    
    setToggle(false);
 }

  useEffect(()=>{
    const fetchUserChannels = async()=>{
      const res = await axios.get(`/user/findChannels/User/Channel/${_id}`);
      SetChannel(res.data);
      SetSkeleton(false);
    }
    fetchUserChannels();
  },[Channel]);
  return(
    <>
      <div className="ChannelCreate">
         <button className="ChannelBtn">
           <span> Create Channel </span>
           <MdCreateNewFolder style={{ color:"#cad9f5" ,cursor:"pointer"}} onClick = {()=>{setToggle(true)}} />
         </button>
         <div className= {Toggle?"Channelactive":"popUp"}>
           <ImCross style={{marginLeft:"auto" , color:"white",cursor:"pointer"}} onClick = {()=>{setToggle(false)}} />
          <form className="ChannelForm" action="" method="" onSubmit={CreateChannel}>
              <input type="text" placeholder="Channel Name" ref={ChannelName} />
              <input type="text" placeholder="Channel Type" ref={ChannelType}/>
                <input type="file" onChange={(event)=>{Setimage(event.target.files[0])}} />
                
                <button type="submit"> Done </button>
         </form>
         </div>
      </div>
    <div className='ProfileChannelSection'>
    {Skeleton?<ChannelSkeleton/>:Channel.map((channel)=>(<ProfileChannels key={channel._id} channel={channel} />))}
   </div>  
    </>
  )
}

//  other users profile 
export const ProfileChannel = ({channelName})=>{
    const user = useSelector((state)=>state.user.userInfo); 
    const [channel,setChannel] = useState([]);
    const [Show,SetShow] = useState(true);
    const [Subscribebtn,SetSubscribeBtn] = useState(false);
    const dispatch = useDispatch();
     useEffect(()=>{
       const fetchChannel=async()=>{
           const res = await axios.get(`/channel?name=${channelName}`);
           setChannel(res.data);
           SetSubscribeBtn(user?res.data.subscribers.includes(user._id)?true:false:false);
           SetShow(false);
       }
       fetchChannel();
    },[channelName,Subscribebtn]);

const subscriberHandeller=async()=>{ 
  await axios.put(`/user/${channel._id}`,{userId:user._id});
  SetSubscribeBtn(!Subscribebtn);
  const User = await axios.get(`/user/${user._id}`);
  localStorage.setItem("User",JSON.stringify(User.data));
  dispatch(fulfilled(User.data));
}     

const ProfileHeader = ()=>{
  return(
  <div className="profileheader">
  <div className="profileimg">
      <img src={`${channel.channelImg}`} alt="" className='CoverProfileImg'/>
  </div>
  <div className="profilepanel">
  <img src={`${channel.channelImg}`} alt="" className='ProfileImg'/>
       <div className="Aboutchannel">
       <div className="channelName">{channelName}</div>
       <div className="subscribers">{ Show?" ":channel.subscribers.length}  subscribers </div>
       </div>
    {user?(user._id!==channel.userId)?<button onClick={subscriberHandeller} className="SubscribersBtn">{Subscribebtn?"Subscribed":"subscribe"}</button>:<CreateVideo id={channel._id}/>:null}
  </div>
</div>
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

return(
      <>
        <ProfileHeader/>
        <ProfileNavbar/>
       </>   
    )
}

