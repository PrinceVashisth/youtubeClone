import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Video from '../../components/Video/Video';
import './SubscriberVideos.css';

export default function SubscriberVideos() {
  const user = useSelector((state)=>state.user.userInfo);  
  const [video,setVideo] = useState([]);
  const [Skeleton,setSkeleton] = useState(true);
useEffect(()=>{
    const fetchAllSubsVideo = async()=>{
     const res = await axios.get(` videos/AllSubscribersVideo/${user._id}`);
     setVideo(res.data.flat());
     setSkeleton(false);
    }
    fetchAllSubsVideo();
},[user]);

  return (
    <>
      <Navbar/>
        <div className="mainContent">
          <Sidebar/>
           <div className="SubscriberContainer">
             <div className="SubscriberWrapper">
                {Skeleton?<LoadingScreen key={1}/>:video.map((v)=>(
                  <div style={{ minWidth:'300px'}}>
                  <Video key={v._id} props={v}/>
                  </div>
                  ))}
             </div>
           </div>
        </div>
    </>
  )
}
