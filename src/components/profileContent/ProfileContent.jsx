import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileChannel, ProfileUser } from '../profiles/Profiles';
import './profilecontent.css';

export default function ProfileContent() {
const user = useSelector((state)=>state.user.userInfo); 
const channelName = useParams().channelName;
  return (
    <>
      <div className="profileContent">
      {user?(user.name===channelName)?<ProfileUser/>:<ProfileChannel channelName={channelName} />:<ProfileChannel channelName={channelName} />}
      </div>
    </>
  )
}
