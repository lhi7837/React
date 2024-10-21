import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
