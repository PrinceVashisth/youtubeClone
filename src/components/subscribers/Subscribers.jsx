import { useEffect } from 'react';
import './subscribers.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Subscribers({users,toggle}) {

const [channel,setchannel] = useState([]);
useEffect(()=>{
  const fetchChannel=async()=>{
   const res = await axios.get(`https://yt-clone-vciw.onrender.com/api/channel?userId=${users}`);
   setchannel(res.data);
  }
  fetchChannel();
},[users])

  return (
    <>  
    <Link to={`/profile/${channel.channelName}`} style={{textDecoration:'none',color:'black'}}>
        <li className={toggle?"itemSubscription minItemSubs":"itemSubscription"}>
            <img src={`assets/${channel.channelImg}`} alt="img" className={toggle?"subscriptionLogo minSubscriptionLogo":"subscriptionLogo"} />
            <span className={toggle?"minSubsName":"subscriptionName"}>{channel.channelName}</span>
        </li>
    </Link>
    </>
  )
}
