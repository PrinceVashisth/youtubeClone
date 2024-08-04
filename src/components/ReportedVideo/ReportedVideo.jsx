import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './ReportedVideo.css';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import Video from '../Video/Video';
import axios from 'axios';
export default function ReportedVideo() {
    const [Skeleton,SetSkeleton] = useState(true);
    const [Videos,setVideos] = useState([]);
    const user = useSelector(state=>state.user.userInfo);
 useEffect(()=>{
   SetSkeleton(true);
    const fetchReportedVideos =async()=>{
     const res = await axios.get(`https://youtube-api-1.onrender.com/api/user/seeReports/Videos/${user._id}`);
     setVideos(res.data);
     SetSkeleton(false);
    } 
    fetchReportedVideos();
 },[]);   
  return(
    <>
      <div className="ReportedVideo">
       {Skeleton?<LoadingScreen/>:Videos.map((V)=>(<Video key={V._id} props={V}/>))}
      </div>    
    </>
  )
}
