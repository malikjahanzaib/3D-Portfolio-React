import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id)); // Fetch sections by ID
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport for better accuracy

      let foundActiveSection = false;

      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY; // Section's top relative to the document
          const height = section.offsetHeight;

          // Check if section is visible in the viewport
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section.id);
            foundActiveSection = true;
          }
        }
      });

      // Handle the edge case where no section is clearly visible (e.g., at the bottom of the page)
      if (!foundActiveSection && sections.length > 0) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          const rect = lastSection.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setActive(lastSection.id); // Explicitly set the last section as active
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Jahanzaib Malik
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              {link.id === "resume" ? (
                // Added the special Resume NavLink
                <a
                  href="/Jahanzaib_Malik_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorphic-button"
                  >
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "h-auto opacity-100 visible" : "h-0 opacity-0 invisible"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all duration-300`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => setToggle(false)}
                >
                  {link.id === "resume" ? (
                    // Added the special Resume NavLink for mobile
                    <a
                      href="/Jahanzaib_Malik_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neumorphic-button"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
