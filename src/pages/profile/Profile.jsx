import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ProfileContent from '../../components/profileContent/ProfileContent';


export default function Profile() {
  return (
    <>
      <Navbar/>
      <div className="mainContent">
        <Sidebar/>
        <ProfileContent/>
        </div>
       </>
  )
}
