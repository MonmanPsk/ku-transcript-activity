import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home";
import { FourthActivityPage } from "./components/Page/FourthActivityPage";
import { NotFound } from "./components/Page/NotFound";
import { FifthActivityPage } from "./components/Page/FifthActivityPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fourth-activity" element={<FourthActivityPage />} />
        <Route path="fifth-activity" element={<FifthActivityPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
