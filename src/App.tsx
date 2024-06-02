import React from "react";
import { Routes, Route } from "react-router-dom";
import { useUserData, useProfileLetter } from "./hooks/useData.ts";

import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const LazyFirstActivityPage = React.lazy(
  () => import("./Page/FirstActivityPage")
);
const LazySecondActivityPage = React.lazy(
  () => import("./Page/SecondActivityPage")
);
const LazyThirdActivityPage = React.lazy(
  () => import("./Page/ThirdActivityPage")
);
const LazyFourthActivityPage = React.lazy(
  () => import("./Page/FourthActivityPage")
);
const LazyFifthActivityPage = React.lazy(
  () => import("./Page/FifthActivityPage")
);

function App() {
  const userData = useUserData();
  const profileLetter = useProfileLetter();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home data={userData} profileLetter={profileLetter as string} />} />
        <Route
          path="first-activity"
          element={
            <React.Suspense fallback="Loading...">
              <LazyFirstActivityPage />
            </React.Suspense>
          }
        />
        <Route
          path="second-activity"
          element={
            <React.Suspense fallback="Loading...">
              <LazySecondActivityPage />
            </React.Suspense>
          }
        />
        <Route
          path="third-activity"
          element={
            <React.Suspense fallback="Loading...">
              <LazyThirdActivityPage />
            </React.Suspense>
          }
        />
        <Route
          path="fourth-activity"
          element={
            <React.Suspense fallback="Loading...">
              <LazyFourthActivityPage />
            </React.Suspense>
          }
        />
        <Route
          path="fifth-activity"
          element={
            <React.Suspense fallback="Loading...">
              <LazyFifthActivityPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
