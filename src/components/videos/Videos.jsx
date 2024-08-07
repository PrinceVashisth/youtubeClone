import Video from '../Video/Video';
import './videos.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LoadingScreen from '../loadingScreen/LoadingScreen';
export default function Videos() {
const user = useSelector((state)=>state.user.userInfo);

const [videos,setvideos] = useState([]);
const [Skeleton,setSkeleton] = useState(true);

useEffect(()=>{
 const VideosHandeller=async()=>{
    const res =  user ? await axios.get(`https://youtube-api-1.onrender.com/api/videos/all/UserPresent?userId=${user._id}`):await axios.get(`https://youtube-api-1.onrender.com/api/videos/all`);
    setvideos(res.data.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)));
    console.log("videos=> ",res.data);
  }
  setSkeleton(!Skeleton);
  VideosHandeller();
},[]);

  return (
    <div className='videos'>
      <div className="videosWrapper">
     {Skeleton?<LoadingScreen key={1}/>:videos.map((v)=>(<Video key={v._id} props={v}/>))}
     </div>
     </div> 
  )
}
