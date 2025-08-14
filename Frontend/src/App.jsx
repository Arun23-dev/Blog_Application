import Mainlayout from "./layout/Mainlayout";
import { ImageKitProvider } from "@imagekit/react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Login from "./pages/Login";
import Recent from "./pages/Recent";
import Trending from "./pages/Trending";

export default function App() {
  const imagekiturl = import.meta.env.VITE_IMAGEKIT_URL
  return (

    <div >
      <ImageKitProvider urlEndpoint={imagekiturl}>
        <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />         {/* default page */}
          <Route path="home" element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="recent" element={<Recent />} />
          <Route path="trending" element={<Trending />} />
          <Route path="login" element={<Login />} />
        </Route>
        </Routes>

      </ImageKitProvider>
    </div>
  );
}
