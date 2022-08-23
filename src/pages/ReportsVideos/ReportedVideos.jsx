import './ReportedVideos.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ReportedVideo from '../../components/ReportedVideo/ReportedVideo';

export default function ReportedVideos() {
  return (
    <>
        <Navbar/>
        <div className="mainContent">
        <Sidebar/>
        <ReportedVideo/>
        </div>
    </>
  )
}
