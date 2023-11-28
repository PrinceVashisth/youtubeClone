import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ExploreVideos from '../../components/exploreVideos/ExploreVideos';
import LoadingScreen from '../../components/loadingScreen/LoadingScreen';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './shorts.css'
export default function Shorts() {

    const [skeleton,setSkeleton] = useState(true);
    const user = useSelector((state)=>state.user.userInfo);
    const [Video,setVideo] = useState([]);
    useEffect(()=>{
      setSkeleton(true);
     setTimeout(() => {
         setSkeleton(false);
     }, 1000);
    },[user]);


  return (
    <>
    <Navbar/>
    <div className="mainContent">
       <Sidebar/>
       <div className="ShortsWrapper">
      {skeleton?<LoadingScreen/>: <img src="assets/UnderconstructionLayout.jpg" width={'100%'} height={"100%"} />}
       </div>

       </div>
    </>
  )
}
