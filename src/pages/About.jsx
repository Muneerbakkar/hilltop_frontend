import BannerSection from "../components/BannerSection";
import { useEffect } from "react";
import About from "../components/About";
import SEO from "../components/SEO";

const AboutPage = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <SEO title="Hilltop" description=".." />

      <main className="pt-16 lg:pt-24">
        {/* About Section */}
        <BannerSection
          title="ABOUT US"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Faboutus_banner.jpg?alt=media&token=ed697e75-e153-4b45-8563-147d981dd74d"
          breadcrumbs={[{ to: "/", label: "Home" }, { label: "About Us" }]}
        />

        {/* Who We Are Section */}
        <About />
      </main>
    </>
  );
};

export default AboutPage;
