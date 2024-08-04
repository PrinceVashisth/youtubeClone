import './profileVideoSection.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../loadingScreen/LoadingScreen';
import Video from '../Video/Video';
export default function ProfileVideoSection() {
  const channelName = useParams().channelName;
 const [Skeleton,setSkeleton]=useState(true);
 const [Videos,SetVideos] = useState([]);
useEffect(()=>{
 const fetchVideos =async()=>{
   const res = await axios.get(`https://youtube-api-1.onrender.com/api/videos/subsVideo/${channelName}`);
   SetVideos(res.data);
   console.log(res.data);
   setSkeleton(false);
 }
 fetchVideos();
},[channelName]); 
  return (
    <div className='ProfileVideoSection'>
      {Skeleton?<LoadingScreen/>:Videos.map((V)=>(
        <Video key={V._id} props={V}/>
        ))}
    </div>
  )
}
