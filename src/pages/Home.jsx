/* eslint-disable react/prop-types */
import { useEffect } from "react"; // Import useEffect
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TradeFairSection from "../components/TradeFairSection";
import GallerySection from "../components/GallerySection";
import SEO from "../components/SEO";

const Home = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling effect
    });
  }, []);

  return (
    <>
      <SEO title="Hilltop" description=".." />

      <div className="overflow-x-hidden">
        <main className="pt-16 lg:pt-10">
          <HeroSection />
          <AboutSection />
          <TradeFairSection />
          <GallerySection />
        </main>
      </div>
    </>
  );
};

export default Home;
