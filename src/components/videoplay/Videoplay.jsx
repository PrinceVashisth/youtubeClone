import './videoplay.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CurrentVideo from '../currentVideo/CurrentVideo';
import Recommended from '../Recommended/Recommended';
import SkeletonVideo from '../SkeletonVideo/SkeletonVideo';
import RecommendedSkeleton from '../recommendedSkeleton/RecommendedSkeleton';

export default function Videoplay() { 
  const [recommended,setRecommended]=useState(false);
  const [Skeleton,setSkeleton]=useState(false);  
const id = useParams().id;
const [Video,setVideo] = useState({});

useEffect(()=>{
   const fetchVideo=async()=>{
    const V = await axios.get(`/videos/video/${id}`);
    setVideo(V.data);
    setSkeleton(true);
    setRecommended(true);
   }
   fetchVideo();
},[id]);

  return (
    <div className='VideoPlayContainer'>
        <div className="videoPlayer">
       {Skeleton?<CurrentVideo Video={Video} />:<SkeletonVideo/>}
        </div>
        <div className="recommendationVideoBar">
        {recommended?<Recommended cid={Video.userId}/>:<RecommendedSkeleton/>}
        </div>
    </div>
  )
}