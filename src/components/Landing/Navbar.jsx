import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
// import { Link } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();  
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

   // 🟢 UPDATED HANDLER
  const handleLinkClick = (link, target) => {
    setActiveLink(link);
    setIsOpen(false);

    // If not on home, navigate first then scroll to section
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // small delay to allow home to render
    }
  };

  // Scroll listener to change navbar styles on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-black top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 fixed" : ""
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-4 z-50">
        <div className="flex justify-between items-center h-16 uppercase">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo-removebg.png"
              alt="Logo"
              className="h-20 w-20 md:h-28 md:w-28"
            />
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <ScrollLink
              to="home"
              smooth={true}
              onClick={() => handleLinkClick("Home", "home")}
              className={`text-white cursor-pointer pb-2 ${
                activeLink === "Home" ? "border-b-2 border-[#D68240]" : ""
              }`}
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              onClick={() => handleLinkClick("About Us", "about")}
              className={`text-white cursor-pointer pb-2 ${
                activeLink === "About Us" ? "border-b-2 border-[#D68240]" : ""
              }`}
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              onClick={() => handleLinkClick("Menus", "menu")}
              className={`text-white cursor-pointer pb-2 ${
                activeLink === "Menus" ? "border-b-2 border-[#D68240]" : ""
              }`}
            >
              Menus
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              onClick={() => handleLinkClick("Contact", "contact")}
              className={`text-white cursor-pointer pb-2 ${
                activeLink === "Contact" ? "border-b-2 border-[#D68240]" : ""
              }`}
            >
              Contact
            </ScrollLink>
             <RouterLink
        to="/blog"
        className={`text-white pb-2 ${
          activeLink === "Blog" ? "border-b-2 border-[#D68240]" : ""
        }`}
      >
        Blog
      </RouterLink>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <a
              href="https://www.ubereats.com/store/heavenly-chicken-and-ribs/m3TyZtZKSaaug61ICO9ElA?diningMode=DELIVERY"
              target="_blank"
            >
              <button className="bg-[#F38025] text-white px-4 py-2 rounded-sm text-lg font-semibold shadow-lg transition-all duration-300 transform hover:bg-white hover:text-black border border-transparent hover:border-black">
                Order Now
              </button>
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full py-3 bg-[#05080a] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-9/12 sm:w-7/12 z-40`}
      >
        <div className="flex flex-col h-full justify-between mt-16 uppercase">
          <div className="flex flex-col space-y-6 p-6 z-50">
            <ScrollLink
              to="home"
              smooth={true}
              onClick={() => handleLinkClick("Home", "home")}
              className="text-white cursor-pointer"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              onClick={() => handleLinkClick("About Us", "about")}
              className="text-white cursor-pointer"
            >
              About Us
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth={true}
              onClick={() => handleLinkClick("Menus", "menu")}
              className="text-white cursor-pointer"
            >
              Menus
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              onClick={() => handleLinkClick("Contact", "contact")}
              className="text-white cursor-pointer"
            >
              Contact
            </ScrollLink>
             <RouterLink
        to="/blog"
        className={`text-white pb-2 ${
          activeLink === "Blog" ? "border-b-2 border-[#D68240]" : ""
        }`}
      >
        Blog
      </RouterLink>
          </div>

          {/* Button */}
          <div className="p-6 mb-[50px]">
            <a
              href="https://www.ubereats.com/store/heavenly-chicken-and-ribs/m3TyZtZKSaaug61ICO9ElA?diningMode=DELIVERY"
              target="_blank"
            >
              <button className="bg-[#F38025] text-white w-full py-3 rounded-md shadow-lg transition-all duration-300 transform hover:bg-white hover:text-black border border-transparent hover:border-black">
                Order Now
              </button>
            </a>
          </div>
        </div>
        <img
          src="/Menu_Items/menuVector.png"
          alt="Decorative Vector"
          className="absolute right-0 top-2 md:top-5 w-[250px]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
