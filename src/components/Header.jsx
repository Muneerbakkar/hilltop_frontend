import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Open Enquiry Modal & Close Mobile Menu if Open
  const openEnquiryModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu when Enquire Now is clicked
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle email submission
  const submitEnquiryEmail = async (email) => {
    try {
      console.log("Submitting email:", email);
      // Simulate API call (Replace this with your backend API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Your enquiry has been submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setEmail(""); // Clear input field
      closeModal(); // Close modal
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      submitEnquiryEmail(email);
    } else {
      toast.error("Please enter a valid email.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <ToastContainer />
      <div className="container mx-auto flex justify-between items-center py-1 px-4 md:px-8">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Flogo.png?alt=media&token=2e061f81-9dc8-4a4f-ada7-5c43a1f87497"
            alt="Hilltop Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-24 md:h-24 object-contain"
          />
          <div className="text-left">
            <Link
              to="/"
              className="text-sm sm:text-lg md:text-xl font-bold text-[#8AA22B] tracking-wide"
            >
              NJATTUMKALAYIL HILLTOP{" "}
              <span className="block text-xs sm:text-sm md:text-base">
                EVENT CENTER
              </span>
            </Link>
            <p className="text-xs md:text-sm italic text-gray-500">
              The Joy of Celebrations
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          {["HOME", "ABOUT US", "FACILITIES", "GALLERY", "CONTACT"].map(
            (item, index) => {
              const route =
                item === "HOME"
                  ? "/"
                  : `/${item.replace(/\s/g, "").toLowerCase()}`;
              return (
                <Link
                  key={index}
                  to={route}
                  className="uppercase text-[#8AA22B] hover:text-black transition-colors duration-300"
                >
                  {item}
                </Link>
              );
            }
          )}
        </nav>

        {/* Enquire Now Button (Desktop) */}
        <button
          onClick={openEnquiryModal}
          className="hidden md:block bg-[#8AA22B] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#6d891f] transition duration-300"
        >
          Enquire Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden px-4 py-2 rounded text-white font-medium"
          style={{ backgroundColor: "#8AA22B" }}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-4">
          {["HOME", "ABOUT US", "FACILITIES", "GALLERY", "CONTACT"].map(
            (item, index) => {
              const route =
                item === "HOME"
                  ? "/"
                  : `/${item.replace(/\s/g, "").toLowerCase()}`;
              return (
                <Link
                  key={index}
                  to={route}
                  onClick={toggleMenu}
                  className="uppercase text-[#8AA22B] hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              );
            }
          )}
          {/* Enquire Now Button (Mobile) - Closes Menu & Opens Modal */}
          <button
            onClick={openEnquiryModal}
            className="bg-[#8AA22B] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#6d891f] transition duration-300"
          >
            Enquire Now
          </button>
        </nav>
      )}

      {/* Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            {/* Close Button - Top Right Corner */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black text-lg rounded-full p-2 transition duration-200 hover:bg-black hover:bg-opacity-10"
            >
              <X />
            </button>

            <h2 className="text-xl font-semibold text-[#8AA22B] mb-4 text-center">
              Enquire Now
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Enter your email and we will get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8AA22B]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#8AA22B] text-white py-2 rounded-lg font-medium shadow-md hover:bg-[#6d891f] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
