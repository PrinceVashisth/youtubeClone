import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Videos from '../../components/videos/Videos';
import './home.css';

function Home() {
  return (
    <>
        <Navbar/>
        <div className="mainContent">
        <Sidebar/>
        <Videos />
        </div>
    </>
  )
}

export default Home;