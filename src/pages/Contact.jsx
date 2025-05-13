import { useEffect, useState } from "react";
import BannerSection from "../components/BannerSection";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const baseUrl = import.meta.env.VITE_API_BASE_URL; // Ensure this environment variable is set

  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Optionally, push a page view event to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: "/contact",
    });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { firstName, lastName, email, subject, message } = formData;

    try {
      const response = await axios.post(`${baseUrl}/send-email`, {
        subject: `${subject} - From ${firstName} ${lastName}`,
        text: `Phone: ${formData.phone}\nEmail: ${email}\n\nMessage: ${message}`,
      });

      if (response.status === 200) {
        toast.success("Email sent successfully!");

        // Trigger the Google Ads conversion event using gtag.
        // Replace 'your_conversion_label' with your actual conversion label.
        if (window.gtag) {
          window.gtag("event", "conversion", {
            send_to: "AW-16846009490/xePKCNnei7caEJLp5uA-",
          });
        }

        // Optionally push additional event data to dataLayer
        window.dataLayer.push({
          event: "contactFormSubmit",
          category: "Contact",
          action: "Submit",
          label: "Contact Form Submitted",
          formDetails: { firstName, lastName, email },
        });

        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Hilltop" description=".." />

      <main className="pt-16 lg:pt-24">
        <ToastContainer />
        {/* Replace BannerSection with your own component or remove if not needed */}
        <BannerSection
          title="CONTACT US"
          backgroundImage="https://firebasestorage.googleapis.com/v0/b/kealthy-90c55.appspot.com/o/Nj%20Hilltop%2Fcontactus_banner.jpg?alt=media&token=d0018917-4964-41be-91f9-af965b407cb2"
          breadcrumbs={[{ to: "/", label: "Home" }, { label: "Contact Us" }]}
        />

        <section className="bg-[#212529] py-12 px-6 lg:px-40">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black opacity-80 text-white focus:outline-none focus:ring focus:ring-[#8AA22B]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black opacity-80 text-white focus:outline-none focus:ring focus:ring-[#8AA22B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-black opacity-80 text-white focus:outline-none focus:ring focus:ring-[#8AA22B]"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-black opacity-80 text-white focus:outline-none focus:ring focus:ring-[#8AA22B]"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black opacity-80 text-white focus:outline-none focus:ring focus:ring-[#8AA22B]"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black opacity-80 text-white focus:outline-none focus:ring focus:ring-[#8AA22B]"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-[#8AA22B] hover:bg-[#6F8623] text-white font-semibold focus:outline-none focus:ring focus:ring-black ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-black opacity-80 p-6">
                <div className="text-yellow-500 text-3xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Call Now</h3>
                  <p className="text-gray-400">9447221820, 94003 68454</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-black opacity-80 p-6">
                <div className="text-yellow-500 text-3xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                  <p className="text-gray-400">
                    KIDACHIRA, KADAMATTON P.O, KOLENCHERY, PIN:682 311
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-black opacity-80 p-6">
                <div className="text-yellow-500 text-3xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Email Now
                  </h3>
                  <p className="text-gray-400">njhilltop@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="bg-[#212529]">
          <div className="w-full h-[500px] rounded-none overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.0370257159716!2d76.4835444747933!3d9.978508890125832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dfd925ab0867%3A0xf1b275e2ff54f9!2sNjattumkalayil%20Hilltop!5e1!3m2!1sen!2sin!4v1737458028030!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
