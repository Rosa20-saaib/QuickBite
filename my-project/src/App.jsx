import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Services from './pages/Services';
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={<h1 className="text-center mt-5">Shopping Cart</h1>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
