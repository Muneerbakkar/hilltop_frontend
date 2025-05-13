/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            About Hilltop
          </h2>
          <div className="text-gray-600 text-sm sm:text-base lg:text-lg space-y-4">
            <p>
              Hilltop International boasts an impressive array of facilities to
              cater to all your event needs. Our air-conditioned hall spans
              10,000 square feet, including a spacious stage. For those who
              prefer an open-air experience, we offer a 15,000 square foot open
              roof area and a 4,000 square foot open stage. Parking is never a
              concern with our expansive 8-acre parking area, accommodating all
              types of vehicles.
            </p>
            <p>
              We pride ourselves on hosting a wide variety of events to suit
              every occasion. From pre-wedding celebrations like Haldi, Mehandi
              parties, Sangeet, and engagements to the main wedding ceremony and
              reception, we've got you covered. We even offer a special Maduram
              veppu combo package for weddings.
            </p>
            <p>
              But that's not all - Hilltop is the perfect venue for life's other
              milestones too. We regularly host baby showers, baptisms, birthday
              parties, and farewell gatherings. For the business world, we
              provide an ideal setting for conventions, exhibitions, corporate
              parties, conferences, seminars, and workshops.
            </p>
            <p>
              Our versatile spaces can accommodate both indoor and outdoor
              events, ensuring that whatever your vision, we can bring it to
              life at Hilltop International. With our extensive facilities and
              experience in hosting a diverse range of events, we're committed
              to making your special day truly memorable.
            </p>
          </div>
        </div>

        {/* Right Logo Section */}
        <div className="text-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Flogo.png?alt=media&token=2e061f81-9dc8-4a4f-ada7-5c43a1f87497" // Replace with your logo image path
            alt="Hilltop International"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4"
          />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#8AA22B]">
            NJATTUMKALAYIL HILLTOP EVENT CENTER
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
