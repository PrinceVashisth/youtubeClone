import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Video from '../../components/Video/Video';
import './likevideos.css';

export default function LikeVideos() {
const user = useSelector((state)=>state.user.userInfo);  
const [video,setVideo] = useState([]);
const [Skeleton,setSkeleton] = useState(true);
useEffect(()=>{
  const fetchLikeVideo = async()=>{
    const res = await axios.get(`/videos/like/${user._id}`);
    setVideo(res.data);
    console.log(res.data);
    setSkeleton(false);
  } 
  fetchLikeVideo();
},[user]);

  return (
    <>
      <Navbar/>
      <div className="mainContent">
        <Sidebar/>
        <div className="likeVideoContainer">
          <div className="likeVideoWrapper">
             {Skeleton?<LoadingScreen key={1}/>:video.map((v)=>(<Video key={v._id} props={v}/>))}
          </div>
        </div>
      </div>
    </>
  )
}
