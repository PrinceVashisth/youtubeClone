import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ExploreVideos from '../../components/exploreVideos/ExploreVideos';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Explore.css';

export default function Explore() {

  const [skeleton,setSkeleton] = useState(true);
  const user = useSelector((state)=>state.user.userInfo);
  const [Video,setVideo] = useState([]);
  useEffect(()=>{
    setSkeleton(true);
    const fetchVideos=async()=>{
      const videos = await axios.get();
      setVideo(videos.data);
    }  
    fetchVideos();
    // setSkeleton(true);
  },[user]);

  return (
   <>
     <Navbar/>
     <div className="mainContent">
        <Sidebar/>
        <div className="ExploreWrapper">
       {skeleton?<LoadingScreen/>:Video.map((V)=>(<ExploreVideos key={V._id} video={V} />))}
        </div>

        </div>
   </>
  )
}
