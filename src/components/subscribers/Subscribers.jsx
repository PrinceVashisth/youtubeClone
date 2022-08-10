import { useEffect } from 'react';
import './subscribers.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Subscribers({users}) {

  const PF = 'http://localhost:3000/assets/';

const [channel,setchannel] = useState([]);
useEffect(()=>{
  const fetchChannel=async()=>{
   const res = await axios.get(`/channel?userId=${users}`);
   setchannel(res.data);
  }
  fetchChannel();
},[users])

  return (
    <>  
    <Link to={`/profile/${channel.channelName}`} style={{textDecoration:'none',color:'black'}}>
        <li className="itemSubscription">
            <img src={`${PF}${channel.channelImg}`} alt="img" className="subscriptionLogo" />
            <span className="subscriptionName">{channel.channelName}</span>
        </li>
    </Link>
    </>
  )
}
