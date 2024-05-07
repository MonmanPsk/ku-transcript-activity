import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home";
import NotFound from "./components/Page/NotFound";
import ScrollToTop from "./components/Page/ScrollToTop";

const LazyFourthActivityPage = React.lazy(
  () => import("./components/Page/FourthActivityPage")
);
const LazyFifthActivityPage = React.lazy(
  () => import("./components/Page/FifthActivityPage")
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
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
