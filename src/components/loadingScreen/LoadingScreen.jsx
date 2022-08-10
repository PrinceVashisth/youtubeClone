import './LoadingScreen.css';
import { FiMoreVertical } from 'react-icons/fi';

export default function LoadingScreen() {
  const COUNTER=8;
  const FeedSkeleton = ()=>{
   return( <>
      <div className="SkeletonVideo">
<div className="imgVideoSkeleton"></div>
<span className="timingSkeleton"></span>
<div className="videoDescSkeleton">
  <div className="descTop">
  <div className="channelImgSkeleton"></div>
  <span className="titleOfVideoSkeleton"></span>
  <FiMoreVertical className='moreDetails '/>
  </div>
  <div className="descBottom">
    <div className="labelNameSkeleton"></div>
    <div className="viewsSkeleton"></div>
  </div>
</div>
</div>
    </>)
  }
   return (Array(COUNTER).fill(<FeedSkeleton/>));
}