import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import {Contact} from "./pages/Contact";
import {Services} from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
