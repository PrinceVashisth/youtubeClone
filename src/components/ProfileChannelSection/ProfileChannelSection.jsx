import './ProfileChannelSection.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import ChannelSkeleton from '../channelSkeleton/ChannelSkeleton';
import ProfileChannels from '../profileChannels/ProfileChannels';

export default function ProfileChannelSection() {
  const channelName = useParams().channelName;
  const [Skeleton,SetSkeleton] = useState(true);
  const [Channel,SetChannel] = useState([]);
  useEffect(()=>{
   const fetchUserChannels = async()=>{
      const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/user/getAllChannels/${channelName}`);
      SetChannel(res.data);
      console.log("Som=>",res.data);
      SetSkeleton(false);
   }
   fetchUserChannels();
  },[channelName]);  
  return (
    <div className='ProfileChannelSection'>
     {Skeleton?<ChannelSkeleton/>: Channel.map((channel)=>(<ProfileChannels key={channel._id} channel={channel} />))}
    </div>
  )
}
