import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import {Contact} from "./pages/Contact";
import {Services} from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
