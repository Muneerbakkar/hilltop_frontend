import { Link } from "react-router-dom";

const TradeFairSection = () => {
  return (
    <section className="bg-white text-gray-800 py-16 relative">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#8AA22B]">
            NJATTUMKALAYIL HILLTOP EVENT CENTER
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            The Hilltop Convention Center offers versatile spaces for all your
            event needs. Our air-conditioned hall spans 10,000 square feet,
            including a stage, perfect for grand indoor events. We also feature
            a spacious 15,000 square feet open roof area for outdoor gatherings
            and a 4,000 square feet open stage for performances. With an
            expansive 8-acre parking area, we can accommodate all types of
            vehicles, ensuring convenience for up to 1000 cars. Located
            strategically near Cochin International Airport, our facility is
            ideal for hosting trade expos, major business meets, conferences,
            banquets, marriages, public events, and more.
          </p>
          <Link
            to="/aboutus"
            className="px-6 py-3 bg-[#8AA22B] text-white font-semibold rounded-lg hover:bg-[#6F8623] transition"
          >
            ABOUT US
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Faboutus2.jpg?alt=media&token=68001098-5c11-423f-b9f6-e1820a1939bb" // Replace with the actual image path
            alt="Trade Fair"
            className="rounded-lg shadow-lg w-full object-cover h-auto max-h-[400px]"
          />
        </div>
      </div>

      {/* Bottom Icons Section */}
      <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
        {[
          { icon: "💻", label: "Events" },
          { icon: "🎤", label: "Business Meetings" },
          { icon: "🤝", label: "Exhibitions" },
          { icon: "🌐", label: "Conventions" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white border border-[#8AA22B] text-gray-800 p-4 rounded-lg shadow-md w-32 h-32 md:w-40 md:h-40"
          >
            <div className="text-3xl md:text-4xl text-[#8AA22B] mb-2">
              {item.icon}
            </div>
            <p className="font-semibold text-center text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradeFairSection;
