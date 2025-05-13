import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      {/* Centered Title Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Inspiring clients through exceptional events. We are dedicated to
          making every convention, trade show, exhibition, and your special
          events a grand success.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Image Section */}
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Faboutus.jpg?alt=media&token=5389cf6b-bf55-47bb-ad22-a2d0603184ee" // Replace with your image URL
            alt="CIAL Trade Fair Center"
            className="rounded-lg shadow-lg w-full object-cover h-[400px] sm:h-[600px]"
          />
        </div>

        {/* Text Overlay Section */}
        <div className="absolute bottom-3 right-7 bg-black bg-opacity-60 shadow-lg rounded-lg p-4 max-w-xs sm:bottom-12 sm:right-20 sm:p-6 sm:max-w-md">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            Bookings open for{" "}
            <span className="text-[#8AA22B]">
              NJATTUMKALAYIL HILLTOP EVENT CENTER
            </span>
          </h3>
          {/* Short Text for Small Screens */}
          <p className="text-xs text-white mb-4 sm:hidden">
            Located in Kolenchery, Hilltop Convention Center offers versatile
            spaces for weddings, receptions, and corporate events, ensuring
            every moment is extraordinary.
          </p>
          {/* Full Text for Larger Screens */}
          <p className="hidden sm:block text-sm text-white mb-4">
            Located in Kolenchery, the Hilltop Convention Center is your premier
            venue for a wide range of events. We cater to all aspects of
            weddings including pre-wedding events like Haldi, Mehandi party,
            Sangeet, and Engagements. Our spaces are perfect for Wedding
            ceremonies, with special Maduram veppu combo offers, and grand
            Wedding Receptions. We also host joyous occasions such as Baby
            showers, Baptisms, Birthday parties, and Farewell parties. For
            corporate needs, we offer facilities for Conventions, Exhibitions,
            Corporate parties, and Conferences/seminars/workshops. Our versatile
            spaces, including outdoor areas, can accommodate any event you
            envision.
          </p>
          <Link
            to="/aboutus"
            className="inline-block px-3 py-2 bg-[#8AA22B] text-white rounded hover:bg-[#6F8623] text-sm sm:px-4 sm:py-2 sm:text-base"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
