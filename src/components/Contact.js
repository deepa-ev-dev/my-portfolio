import React, { useContext } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ThemeContext } from "../components/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const iconColor = theme === "dark" ? "text-white" : "text-[#50221d]";

  const iconStyle = {
    fontSize: "2.5rem", // Adjust the size here for responsiveness
    color: "#50221d" // Adjust the color here
  };

  return (
    <section id="contact" className={`p-8 md:p-20 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} text-center`}>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-[#50221d] mb-12 ${iconColor}`}>Contact</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-2">
            <FaPhone style={iconStyle} />
            <div className="text-center md:text-left">
              <p className="font-semibold">Call Me</p>
              <p>+91 9080702627</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-2">
            <FaEnvelope style={iconStyle} />
            <div className="text-center md:text-left">
              <p className="font-semibold">Email</p>
              <p>deepavenkataramanaiah@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-2">
            <FaMapMarkerAlt style={iconStyle} />
            <div className="text-center md:text-left">
              <p className="font-semibold">Location</p>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
