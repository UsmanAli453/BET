import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Button } from "../../components/component";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com"; // Import EmailJS
import { useContext } from "react";
import { themeContext } from "../../Context/Context";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("address"); // Tab state: 'address' or 'map'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {theme} = useContext(themeContext)

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_grjplab", // Replace with your EmailJS service ID
        "template_5tlfs7a", // Replace with your EmailJS template ID
        formData,
        "qogJxfkE0rFeDHdFp" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccessMessage("Your message has been sent successfully!");
          setIsSending(false);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="py-16">
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start"
        data-aos="fade-up"
      >
        {/* Form Section */}
        <div className="p-6" data-aos="fade-right">
          <h2
            className="text-left text-3xl lg:text-4xl font-bold mb-4 text-black"
            data-aos="fade-up"
          >
            About BlackEdgeTech
          </h2>
          <div
            className="bg-CustomYellow mb-6 h-1 w-32"
            data-aos="fade-up"
          ></div>
          <p
            className="text-gray-700 mb-8 text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At BlackEdgeTech, we specialize in delivering cutting-edge
            technology solutions to empower businesses. From custom software and
            mobile applications to cloud solutions and cybersecurity, we are
            committed to innovation and excellence.
          </p>
          <form
            className="space-y-4"
            onSubmit={sendEmail}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex gap-4">
              {/* Name Field */}
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={formData.from_name}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-CustomBlue focus:outline-none"
                required
              />
              {/* Email Field */}
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleInputChange}
                className="w-1/2 px-4 py-2 border rounded-md focus:ring-2 focus:ring-CustomBlue focus:outline-none"
                required
              />
            </div>
            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-CustomBlue focus:outline-none"
              />
            </div>
            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Please describe what you need."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-CustomBlue focus:outline-none"
                required
              ></textarea>
            </div>
            <Button
              text={isSending ? "Sending..." : "Submit"}
              disabled={isSending}
            />
          </form>
          {successMessage && (
            <p className="text-green-600 mt-4">{successMessage}</p>
          )}
        </div>

        {/* Tabbed Section */}
        <div className="p-6" data-aos="fade-left">
          {/* Tabs */}
          <div
            className="flex space-x-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <button
              onClick={() => setActiveTab("address")}
              className={`pb-2 font-bold text-xl ${
                activeTab === "address"
                   ? "border-b-2 border-CustomYellow text-CustomBlue"
                  : ` ${theme === "dark" ? "text-white" : "text-gray-600"}`
              }`}
            >
              Address
            </button>
            <button
              onClick={() => setActiveTab("map")}
              className={`pb-2 font-bold text-xl ${
                activeTab === "map"
                  ? "border-b-2 border-CustomYellow text-CustomBlue"
                  : ` ${theme === "dark" ? "text-white" : "text-gray-600"}`
              }`}
            >
              Google Map
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "address" && (
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div
                  className="bg-CustomBlue p-3 rounded-full shadow-lg w-14 h-14 flex items-center justify-center"
                  data-aos="zoom-in"
                >
                  <FaMapMarkerAlt className="text-white text-xl" />{" "}
                </div>
                <div>
                  <p className="font-medium text-CustomBlack">OUR LOCATION</p>
                  <p className="text-gray-600">
                    Warwick Street, Punchbowl, Sydney, NSW, Australia
                  </p>
                </div>
              </div>
              {/* Mail */}
              <div className="flex items-start space-x-4" data-aos="zoom-in">
                <div className="bg-CustomBlue p-3 rounded-full shadow-lg w-14 h-14 flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />{" "}
                </div>
                <div>
                  <p className="font-medium text-CustomBlack">SEND US MAIL</p>
                  <p className="text-gray-600">blackedgetechnology@gmail.com</p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4" data-aos="zoom-in">
                <div className="bg-CustomBlue p-3 rounded-full shadow-lg w-14 h-14 flex items-center justify-center">
                  <FaPhone className="text-white text-xl" />{" "}
                </div>
                <div>
                  <p className="font-medium text-CustomBlack">CALL US</p>
                  <p className="text-gray-600">0416922045</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "map" && (
            <div className="h-64" data-aos="fade-up" data-aos-delay="300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.499687769983!2d151.04148337481365!3d-33.92827402214023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc002e160cc9%3A0xb2b3f0f9288d19f9!2sWarwick%20St%2C%20Punchbowl%20NSW%202196%2C%20Australia!5e0!3m2!1sen!2s!4v1733677181803!5m2!1sen!2s"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
