import './SkeletonVideo.css';
// import { AntDesign } from '@expo/vector-icons'; 
import {BsFillPlayFill} from 'react-icons/bs';
import { CgPlayPause } from 'react-icons/cg';
import { MdSpeaker } from 'react-icons/md';

export default function SkeletonVideo() {
  return (
    <>
      <div className='playerVideo'>
           <div className="skeletonVideo">
           </div>
           <div className="videostrip">
           <div className="SkeletonIcon">
           <BsFillPlayFill color='white' size={30} />
           </div>
           <div className="SkeletonIcon">
           <CgPlayPause color='white' size={30} />
           </div>
           <div className="SkeletonIcon">
            <MdSpeaker color='white' size={30} />
           </div>
           <div className="playtimeshadow">

           </div>
           </div>
           <div className="skeletonBottom">
           <div className="longStrip"></div>
           <div className="middlestrip"></div>
           <div className="shortStrip"></div>
           </div> 
      </div>
    </>
  )
}
