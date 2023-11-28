import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("./pages/login/Login"));
const Explore = lazy(() => import("./pages/ExplorePage/Explore"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const VideoPlay = lazy(() => import("./pages/videoPlay/VideoPlay"));
const History = lazy(() => import("./pages/History/History"));
const LikeVideos = lazy(() => import("./pages/likeVideos/LikeVideos"));
const SubscriberVideos = lazy(() =>
  import("./pages/SubscriberVideos/SubscriberVideos")
);
const Catagory = lazy(() => import("./pages/Catagory/Catagory"));
const ReportedVideos = lazy(() =>
  import("./pages/ReportsVideos/ReportedVideos")
);
const Shorts = lazy(() => import("./pages/shorts/Shorts"));
const Subscription = lazy(() => import("./pages/subscription/Subscription"));

function App() {
  const user = useSelector((state) => state.user.userInfo);

  const safeRoute = (children) => {
    if (user) {
      return children;
    }
    return <Navigate to={"/"} />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/Login"
          element={
            user ? (
              <Navigate to={"/"} />
            ) : (
              <Suspense fallback={<div>loading</div>}>
                <Login />
              </Suspense>
            )
          }
        />
        <Route
          path="/Explore"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="/Shorts"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Shorts />
            </Suspense>
          }
        />
        <Route
          path="/Subscription"
          element={safeRoute(
            <Suspense fallback={<div>loading</div>}>
              <Subscription />
            </Suspense>
          )}
        />
        <Route
          path="/profile/:channelName"
          element={safeRoute(
            <Suspense fallback={<div>loading</div>}>
              <Profile />
            </Suspense>
          )}
        />
        <Route
          path="/video/:id"
          element={
            <Suspense fallback={<div>loading</div>}>
              <VideoPlay />
            </Suspense>
          }
        />
        <Route
          path="/history"
          element={safeRoute(
            <Suspense fallback={<div>loading</div>}>
              <History />
            </Suspense>
          )}
        />
        <Route
          path="/like"
          element={safeRoute(
            <Suspense fallback={<div>loading</div>}>
              <LikeVideos />
            </Suspense>
          )}
        />
        <Route
          path="/subscriberVideo"
          element={safeRoute(
            <Suspense fallback={<div>loading</div>}>
              <SubscriberVideos />
            </Suspense>
          )}
        />
        <Route
          path="/Explore/:catagory"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Catagory />
            </Suspense>
          }
        />
        <Route
          path="/Reports"
          element={safeRoute(
            <Suspense fallback={<div>loading</div>}>
              <ReportedVideos />
            </Suspense>
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
