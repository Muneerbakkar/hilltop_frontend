import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const videoSources = [
    "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fhero1.mp4?alt=media&token=90ced99d-b1a8-4c27-bd73-3a261a2e14a1",
    "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fhero2.mp4?alt=media&token=4fa5bfc1-6724-4f6f-8efa-691002b79fab",
    "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fhero3.mp4?alt=media&token=f495ee69-dcaa-417d-a23c-80a49a96c6a7",
    "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fhero4.mp4?alt=media&token=08ed046f-09e0-46e5-b296-2a6523e1e0c8",
    "https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fhero5.mp4?alt=media&token=1279d30f-7a0f-43bb-aaaa-8d820534ecc8",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videoSources.length) % videoSources.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000); // Change slide every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] sm:h-[90vh] md:mt-16">
      {/* Video Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex">
        {videoSources.map((src, index) => (
          <div
            key={index}
            className={`w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } absolute`}
          >
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Overlay Content (Small and Bottom Left) */}
      <div className="absolute bottom-6 px-4 sm:px-6 z-10">
        <div className="bg-black bg-opacity-60 p-4 sm:p-6 rounded-md shadow-lg text-white max-w-sm">
          <h1 className="text-lg sm:text-xl font-semibold mb-2 text-[#8AA22B]">
            NJATTUMKALAYIL HILLTOP EVENT CENTER
          </h1>
          <h2 className="text-base sm:text-lg font-bold">
            CELEBRATE YOUR SPECIAL MOMENTS
          </h2>
          <h3 className="text-sm sm:text-base font-bold mb-4">
            WORLD-CLASS{" "}
            <span className="font-normal">
              FACILITIES FOR <span className="text-[#8AA22B]">EVENTS</span>
            </span>
          </h3>
          <p className="text-xs sm:text-sm mb-4">
            Located at Kolenchery our state-of-the-art facilities are perfect
            for weddings, conferences, and exhibitions. Enjoy seamless service
            and spacious venues tailored to your needs.
          </p>
          <Link
            to="/aboutus"
            className="mt-2 bg-[#8AA22B] text-white font-semibold px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 hover:bg-[#6F8623] transition duration-300 text-sm inline-flex"
          >
            EXPLORE MORE <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
