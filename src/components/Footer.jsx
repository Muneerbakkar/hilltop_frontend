/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Subscription successful!");
        setEmail(""); // Clear the email input
      } else {
        toast.error(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <ToastContainer /> {/* Toastify container for showing notifications */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-[#8AA22B]">
              NJATTUMKALAYIL HILLTOP EVENT CENTER
            </h2>
          </div>
          <p className="text-sm text-gray-400">The Joy of Celebrations</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#8AA22B]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#8AA22B]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-[#8AA22B]">
                About
              </Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-[#8AA22B]">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#8AA22B]">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#8AA22B]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#8AA22B]">Help</h3>
          <div className="space-x-3">
            <Link
              to="/aboutus"
              className="inline-block px-4 py-2 border border-gray-500 rounded-md text-gray-400 hover:bg-gray-800 hover:border-gray-400"
            >
              More Info
            </Link>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 border border-gray-500 rounded-md text-gray-400 hover:bg-gray-800 hover:border-gray-400"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#8AA22B]">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-l-md text-black"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#8AA22B] text-white rounded-r-md hover:bg-[#6F8623]"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
