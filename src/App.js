import Home from './pages/home/Home';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import Explore from './pages/ExplorePage/Explore';
import Profile from './pages/profile/Profile';
import VideoPlay from './pages/videoPlay/VideoPlay';
import History from './pages/History/History';
import LikeVideos from './pages/likeVideos/LikeVideos';
import SubscriberVideos from './pages/SubscriberVideos/SubscriberVideos';
import Catagory from './pages/Catagory/Catagory';
import ReportedVideos from './pages/ReportsVideos/ReportedVideos';


function App() {
  const user = useSelector((state)=>state.user.userInfo);
  return (
<Router>
    <Routes>
        <Route path='/' element={<Home/>} />
          <Route path="/Login" element={user?<Navigate to={'/'}/>:<Login/>} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/profile/:channelName" element={<Profile />} />
          <Route path="/video/:id" element={<VideoPlay />} />
          <Route path="/history" element={<History />} />
          <Route path="/like" element={<LikeVideos />} />
          <Route path="/subscriberVideo" element={<SubscriberVideos />} />
          <Route path="/Explore/:catagory" element={<Catagory />} />
          <Route path="/Reports" element={<ReportedVideos />} />
            
    </Routes>
 </Router>
  );
}

export default App;
