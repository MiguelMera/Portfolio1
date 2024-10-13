/* eslint-disable @next/next/no-img-element */
import { Mail } from "lucide-react";

const Footer = () => {
    return (
      <footer className="customGray text-white py-6 shadow">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="text-3xl font-bold mb-2 md:mb-0">Let's Work Together -</h2>
          </div>
  
          {/* Email Section */}
          <div className="flex items-center email px-4 py-2 rounded-md shadow-md variprojects">
            <span className="mr-2">
                <Mail className="w-5 h-5"/>
              
            </span>
            <a
              href="mailto:tiltedlobster@gmail.com"
              className="text-gray-300 hover:text-white"
            >
              tiltedlobster@gmail.com
            </a>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-sm text-gray-500">
            © 2024 all rights reserved.
          </p>
  
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://wa.link/bd55o0">
              <img src="/wasa.png" alt="Whatsapp" className="w-5 h-5 variprojects" />
            </a>
            <a href="https://www.linkedin.com/in/miguel-mera-466917332/">
              <img src="/linkedin.png" alt="linkedin" className="w-5 h-5 variprojects" />
            </a>
            <a href="https://github.com/MiguelMera">
              <img src="/github.png" alt="Github" className="w-5 h-5 variprojects" />
            </a>
           
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  