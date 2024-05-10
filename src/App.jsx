import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Carousel from "./Components/Carousel";
import Slider from "./Components/Slider";
import Showhide from "./Components/Showhide";

export default function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/slide" element={<Slider />} />
          <Route path="/show" element={<Showhide />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}