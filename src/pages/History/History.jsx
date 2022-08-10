import HistoryVideos from '../../components/historyVideos/HistoryVideos';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './History.css';

export default function History() {
  return (
    <>
        <Navbar/>
        <div className="mainContent">
        <Sidebar/>
        <HistoryVideos/>
        </div>
    </>
  )
}
