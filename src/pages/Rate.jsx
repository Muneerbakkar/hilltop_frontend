import { useEffect } from "react";
import BannerSection from "../components/BannerSection";

const Rate = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const pricingData = [
    {
      day: "Sunday",
      mainHall: {
        tariffFor6Hours: "3.25 Lakh",
        extraHours: "20,000",
      },
      meetingHall: {
        tariffFor6Hours: "15,000",
        extraHours: "5,000",
      },
      conferenceHall: {
        tariffFor6Hours: "10,000",
        extraHours: "1,500",
      },
      gst: "18%",
    },
    {
      day: "Monday",
      mainHall: {
        tariffFor6Hours: "3 Lakh",
        extraHours: "20,000",
      },
      meetingHall: {
        tariffFor6Hours: "20,000",
        extraHours: "6,000",
      },
      conferenceHall: {
        tariffFor6Hours: "15,000",
        extraHours: "2,000",
      },
      gst: "18%",
    },
    {
      day: "Tuesday",
      mainHall: {
        tariffFor6Hours: "2 Lakh",
        extraHours: "15,000",
      },
      meetingHall: {
        tariffFor6Hours: "20,000",
        extraHours: "4,000",
      },
      conferenceHall: {
        tariffFor6Hours: "15,000",
        extraHours: "1,800",
      },
      gst: "18%",
    },
    {
      day: "Wednesday",
      mainHall: {
        tariffFor6Hours: "3 Lakh",
        extraHours: "22,000",
      },
      meetingHall: {
        tariffFor6Hours: "20,000",
        extraHours: "7,000",
      },
      conferenceHall: {
        tariffFor6Hours: "15,000",
        extraHours: "2,500",
      },
      gst: "18%",
    },
    {
      day: "Thursday",
      mainHall: {
        tariffFor6Hours: "3 Lakh",
        extraHours: "20,000",
      },
      meetingHall: {
        tariffFor6Hours: "20,000",
        extraHours: "5,500",
      },
      conferenceHall: {
        tariffFor6Hours: "15,000",
        extraHours: "1,700",
      },
      gst: "18%",
    },
    {
      day: "Friday",
      mainHall: {
        tariffFor6Hours: "2 Lakh",
        extraHours: "17,000",
      },
      meetingHall: {
        tariffFor6Hours: "20,000",
        extraHours: "4,500",
      },
      conferenceHall: {
        tariffFor6Hours: "15,000",
        extraHours: "1,600",
      },
      gst: "18%",
    },
    {
      day: "Saturday",
      mainHall: {
        tariffFor6Hours: "3.25 Lakh",
        extraHours: "21,000",
      },
      meetingHall: {
        tariffFor6Hours: "15,000",
        extraHours: "6,000",
      },
      conferenceHall: {
        tariffFor6Hours: "10,000",
        extraHours: "2,000",
      },
      gst: "18%",
    },
  ];

  return (
    <main className="pt-16 lg:pt-24 overflow-y-scroll">
      {/* Banner Section */}
      <BannerSection
        title="RATE AND TARIFF"
        backgroundImage="/images/rate_banner.jpg"
        breadcrumbs={[{ to: "/", label: "Home" }, { label: "Rate & Tariff" }]}
      />
      <section className="py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Table</h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full table-auto border-collapse bg-gray-200 text-gray-800">
              <thead>
                <tr className="bg-[#8AA22B] text-white">
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Day
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Main Hall - 6 Hours
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Extra Hours
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Meeting Hall - 6 Hours
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Extra Hours
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Conference Hall - 6 Hours
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    Extra Hours
                  </th>
                  <th className="py-3 px-4 text-left border border-gray-300">
                    GST
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 border-t border-b border-gray-300"
                  >
                    <td className="py-3 px-4 border border-gray-300">
                      {row.day}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.mainHall.tariffFor6Hours}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.mainHall.extraHours}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.meetingHall.tariffFor6Hours}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.meetingHall.extraHours}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.conferenceHall.tariffFor6Hours}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.conferenceHall.extraHours}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {row.gst}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Adding the note below the table */}
          <p className="text-left text-[#8AA22B] font-bold mt-8">
            <strong>NB:</strong> All rates are valid only till January 31, 2025.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Rate;
