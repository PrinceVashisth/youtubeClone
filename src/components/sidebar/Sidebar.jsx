import './sidebar.css';
import { AiFillHome,AiOutlineLike,AiOutlineDown, AiOutlineHistory } from 'react-icons/ai';
import { MdOutlineExplore,MdSubscriptions ,MdVideoLibrary,MdOutlineLocalMovies, MdOutlineLiveTv, MdScience, MdSports} from 'react-icons/md';

import {CgGames, CgMusic} from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { VscReport } from 'react-icons/vsc';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import Subscribers from '../subscribers/Subscribers';

import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export default function Sidebar() {
const user = useSelector((state)=>state.user.userInfo);


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
      <ul className="ExploreList">
      <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
        <li className="exploreListItem">
          <AiFillHome className='Icon'/>
          <span className="exploreIconName">Home</span>
        </li>
      </Link>
      
      <Link to={'/Explore'}  style={{textDecoration:'none',color:'black'}}>
        <li className="exploreListItem">
          <MdOutlineExplore className='Icon'/>
          <span className="exploreIconName">Explore</span>
        </li>
      </Link>
      <Link to={'/Shorts'}  style={{textDecoration:'none',color:'black'}}>
        <li className="exploreListItem">
          <CgMusic className='Icon'/>
          <span className="exploreIconName">Shorts</span>
        </li>
        </Link>
      <Link to={'/Subscription'}  style={{textDecoration:'none',color:'black'}}>
        <li className="exploreListItem">
          <MdSubscriptions className='Icon'/>
          <span className="exploreIconName">Subscription</span>
        </li>
        </Link>
        </ul>

{
 user?
 <>
        <hr className='Seperator'/>
        <ul className="ExploreList">
      <Link to={`/subscriberVideo`} style={{textDecoration:'none' , color:'black'}}>
        <li className="exploreListItem">
          <MdVideoLibrary className='Icon'/>
          <span className="exploreIconName">Library</span>
        </li>
      </Link>   
      <Link to={'/history'} style={{ textDecoration:'none',color:'black'}}>  
        <li className="exploreListItem">
          <AiOutlineHistory className='Icon'/>
          <span className="exploreIconName">History</span>
        </li>
      </Link>  
        <li className="exploreListItem">
          <CgMusic className='Icon'/>
          <span className="exploreIconName">Your Video</span>
        </li>
        <li className="exploreListItem">
          <CgMusic className='Icon'/>
          <span className="exploreIconName">Watch Later</span>
        </li>
  <Link to={'/like'}  style={{textDecoration:"none",color:"black"}}>    
        <li className="exploreListItem">
          <AiOutlineLike className='Icon'/>
          <span className="exploreIconName">Liked Videos</span>
        </li>
  </Link>    
        <li className="exploreListItem">
          <AiOutlineDown className='Icon'/>
          <span className="exploreIconName">Show More</span>
        </li>
      </ul>

        <hr className='Seperator'/>
      <div className="subscription__List">
      <div className="headingSubscription">Subscription</div>
        <ul className="listSubscription">
       {user.subscribed.map((s)=>(
        <Subscribers 
          key={s}
          users ={s}
        />
       )) }
        </ul>
      </div>
</>:null
}
      <hr className='Seperator'/>
       <div className="Explore">
       <span className='ExploreHeading'>Explore</span>
          <ul className='ExploringList'>
  <Link to={'/Explore/Movies'} style={{textDecoration:'none',color:'black'}}>
          <li className="ExploreListitem">
           <MdOutlineLocalMovies className='Icon'/>
           <span className='ExploreItemName'>Movies</span>
          </li>
  </Link> 
  <Link to={'/Explore/Gaming'} style={{textDecoration:'none',color:'black'}}>
          <li className="ExploreListitem">
           <CgGames className='Icon'/>
           <span className='ExploreItemName'>Gaming</span>
          </li>
  </Link>
  <Link to={'/Explore/Live'} style={{textDecoration:'none',color:'black'}}>
          <li className="ExploreListitem">
           <MdOutlineLiveTv className='Icon'/>
           <span className='ExploreItemName'>Live</span>
          </li>
  </Link>        
  <Link to={'/Explore/Education'} style={{textDecoration:'none',color:'black'}}>        
          <li className="ExploreListitem">
           <MdScience className='Icon'/>
           <span className='ExploreItemName'>Learn</span>
          </li>
  </Link>        
  <Link to={'/Explore/Sports'} style={{textDecoration:'none',color:'black'}}>
          <li className="ExploreListitem">
           <MdSports className='Icon'/>
           <span className='ExploreItemName'>Sports</span>
          </li>
  </Link>
       </ul>
      </div> 
      <hr className='Seperator'/>
     <div className="otherUserList">
      <ul className="userInformation">
        <li className="userInfo">
          <FiSettings className='Icon'/>
          <span className='SubjectName'>Settings</span>
        </li>
        <li className="userInfo">
          <VscReport className='Icon'/>
          <span className='SubjectName'>Reports</span>
        </li>
        <li className="userInfo">
          <IoMdHelpCircleOutline className='Icon'/>
          <span className='SubjectName'>Help</span>
        </li>
      </ul>
     </div>

      </div>
    </div>  
  )
}
