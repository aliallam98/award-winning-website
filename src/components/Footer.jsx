import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 bg-violet-300">
      <div className="container flex flex-col gap-4">
        <p className="text-center text-blue-75 font-general">©Nova 2024. All rights reserved</p>
        <div className="flex items-center justify-center gap-4 text-white">
          <FaTwitter size={25} className="cursor-pointer"/>
          <FaFacebook size={25} className="cursor-pointer"/>
          <FaInstagram size={25} className="cursor-pointer"/>
          <FaLinkedin size={25} className="cursor-pointer"/>
        </div>
        <p className="text-center text-blue-75 font-general">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
