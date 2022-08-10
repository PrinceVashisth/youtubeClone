import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import Video from '../Video/Video';
import './historyVideo.css';

export default function HistoryVideos() {
  const [Skeleton,setSkeleton]=useState(true);
  const user = useSelector((state)=>state.user.userInfo);
 const [video,SetVideo] = useState();
  useEffect(()=>{
   const fetchVideos = async()=>{
    const res = await axios.get(`/videos/history/${user._id}`);
    SetVideo(res.data);
    setSkeleton(false);
   }
   fetchVideos();
  },[user]);
  return (
    <>
      <div className="historyVideos">
      {Skeleton?<LoadingScreen key={1}/>:video.map((v)=>(<Video key={v._id} props={v}/>))}
      </div>
    </>
  )
}
