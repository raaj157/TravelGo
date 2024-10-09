import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="relative py-10 bg-gray-900">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full w-full object-cover opacity-30"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="relative container mx-auto z-10">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-lg rounded-t-xl">
            {/* Logo and About Section */}
            <div className="py-8 px-4 text-gray-800">
              <div className="flex items-center gap-3">
                <img src={FooterLogo} alt="Footer Logo" className="h-14" />
                <h1 className="text-xl sm:text-3xl font-bold text-gray-800">TravelloGo</h1>
              </div>
              <p className="text-sm mt-4">
                Discover the world’s most amazing places, designed to bring cultural relax experiences.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow className="text-primary" />
                <p>Noida, Uttar Pradesh</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt className="text-primary" />
                <p>+91 123456789</p>
              </div>
              {/* Social Icons */}
              <div className="flex items-center gap-5 mt-6 text-2xl text-primary">
                <a href="#">
                  <FaInstagram className="hover:text-pink-500 transition duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="hover:text-blue-500 transition duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="hover:text-blue-600 transition duration-300" />
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {FooterLinks.map((section, index) => (
                <div className="py-8 px-4" key={index}>
                  <h1 className="text-lg font-semibold text-gray-800 mb-4">
                    {section.title}
                  </h1>
                  <ul className="space-y-3">
                    <li className="hover:text-primary transition duration-300">
                      <Link to={section.link} onClick={() => window.scrollTo(0, 0)}>
                        {section.title}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
            &copy; 2024 All rights reserved || Made with ❤️ by Raj Kumar
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
