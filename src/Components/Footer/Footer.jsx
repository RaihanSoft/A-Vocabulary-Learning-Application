import "animate.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-10 animate__animated animate__fadeInUp">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-yellow-400">Get in Touch</h3>
          <p>Need help with learning? Contact us!</p>
          <p>Email: support@lingobingo.com</p>
          <p>Phone: +1 555 789 123</p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-yellow-400 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} className="animate__animated animate__heartBeat animate__infinite" />
            </a>
            <a
              href="https://twitter.com"
              className="text-yellow-400 hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} className="animate__animated animate__bounce animate__infinite" />
            </a>
            <a
              href="https://instagram.com"
              className="text-yellow-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} className="animate__animated animate__rubberBand animate__infinite" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-yellow-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} className="animate__animated animate__shakeX animate__infinite" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center md:text-right space-y-3">
          <p className="text-sm">
            © {new Date().getFullYear()} Lingo Bingo. All rights reserved.
          </p>
          <p className="text-xs text-gray-300">Learn and grow with Lingo Bingo!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
