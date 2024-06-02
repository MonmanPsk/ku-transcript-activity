import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import fetchUser from "./api/user.ts";
import fetchUserEN from "./api/user_en.ts";

import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import { StudentProps } from "./types/TranscriptReport.types";

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
  const [userData, setUserData] = useState<StudentProps | null>(null);
  const [profileLetter, setProfileLetter] = useState<string>("");

  useEffect(() => {
    // Clear localStorage from before version
    window.localStorage.clear()
    // Fetch TH user data from api
    fetchUser().then((data) => {
      if (data) {
        setUserData(data);
      } else {
        // Handle case where fetchUser() returns undefined
        console.error("fetchUser() returned undefined");
      }
    });
    // Fetch EN user data from api
    fetchUserEN().then((data) => {
      if (data) {
        setProfileLetter(data.firstname[0] + data.lastname[0]);
      } else {
        console.error("fetchUserEN() returned undefined");
      }
    });
  }, []) // useEffect will only run once at first

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home data={userData as StudentProps} profileLetter={profileLetter as string} />} />
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
