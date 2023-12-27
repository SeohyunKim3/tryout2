import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameTwentyThree = React.lazy(() => import("pages/FrameTwentyThree"));
const FrameTen = React.lazy(() => import("pages/FrameTen"));
const FrameTwentyTwo = React.lazy(() => import("pages/FrameTwentyTwo"));
const FrameTwentySeven = React.lazy(() => import("pages/FrameTwentySeven"));
const FrameTwenty = React.lazy(() => import("pages/FrameTwenty"));
const FrameEight = React.lazy(() => import("pages/FrameEight"));
const FrameFour = React.lazy(() => import("pages/FrameFour"));
const FrameThree = React.lazy(() => import("pages/FrameThree"));
const FrameTwentyFour = React.lazy(() => import("pages/FrameTwentyFour"));
const FrameFifteen = React.lazy(() => import("pages/FrameFifteen"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/framefifteen" element={<FrameFifteen />} />
          <Route path="/frametwentyfour" element={<FrameTwentyFour />} />
          <Route path="/framethree" element={<FrameThree />} />
          <Route path="/framefour" element={<FrameFour />} />
          <Route path="/frameeight" element={<FrameEight />} />
          <Route path="/frametwenty" element={<FrameTwenty />} />
          <Route path="/frametwentyseven" element={<FrameTwentySeven />} />
          <Route path="/frametwentytwo" element={<FrameTwentyTwo />} />
          <Route path="/frameten" element={<FrameTen />} />
          <Route path="/frametwentythree" element={<FrameTwentyThree />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
