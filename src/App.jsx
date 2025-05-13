import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { Helmet, HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="facilities" element={<Service />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
