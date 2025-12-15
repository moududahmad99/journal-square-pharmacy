import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {

  const SafeMotion = ({ children, ...props }) => {
    const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
    return <MotionComponent {...props}>{children}</MotionComponent>
  }

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/refill", label: "Refill" },
    { path: "/contacts", label: "Contact" }
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="z-50"
          >
            <Link to="/">
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                className="h-13 w-14"
                style={{ transform: 'rotate(-1deg)' }}
              />
              
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="ml-5 flex items-center h-full relative">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  label={item.label}
                  isActive={location.pathname === item.path}
                  isHovered={hoveredLink === item.path}
                  setHoveredLink={setHoveredLink}
                />
              ))}

              {/* Animated hover background */}
              <AnimatePresence>
                {hoveredLink && (
                  <motion.div
                    layoutId="navHoverBg"
                    className="absolute inset-0 bg-[#5F99AE]/10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </div>

           
          </div>
           {/* CTA Button */}
              <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="hidden lg:block" // Hide on mobile (below md breakpoint), show on md and above
    >
      <Link
        to="/book-an-appointment"
        className="bg-gradient-to-r from-[#5F99AE] to-[#3E3F5B] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center"
      >
        <FaCalendarAlt className="text-sm mr-2" />
        <span>Book Appointment</span>
      </Link>
    </motion.div>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button - Correct Implementation */}
          {/* Mobile Menu Button - Pixel Perfect Animation */}
          {/* Foolproof 2-Bar Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 focus:outline-none z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              {/* Bar 1 - Rotates 45 degrees and moves down */}
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[#3E3F5B] transition-all duration-300 ${isOpen ?
                  'top-1/2 -translate-y-1/2 rotate-45' :
                  'top-1/4 -translate-y-1/2'}`}
              ></span>

              {/* Bar 2 - Rotates -45 degrees and moves up */}
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[#3E3F5B] transition-all duration-300 ${isOpen ?
                  'top-1/2 -translate-y-1/2 -rotate-45' :
                  'top-3/4 -translate-y-1/2'}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Now Working Perfectly */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {navItems.map((item) => (
                  <MobileNavLink
                    key={item.path}
                    to={item.path}
                    label={item.label}
                    isActive={location.pathname === item.path}
                    onClick={() => setIsOpen(false)}
                  />
                ))}

                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Link
                    to="/book-an-appointment"
                    className="block w-full text-center bg-gradient-to-r from-[#5F99AE] to-[#3E3F5B] text-white px-6 py-3 rounded-lg font-bold shadow-md"
                  >
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Desktop NavLink Component
function NavLink({ to, label, isActive, setHoveredLink }) {
  return (
    <motion.div
      onHoverStart={() => setHoveredLink(to)}
      onHoverEnd={() => setHoveredLink(null)}
      className="relative px-1 py-1 mx-1"
    >
      <Link
        to={to}
        className={`relative z-10 px-4 py-2 text-lg font-medium transition-colors ${isActive ? "text-[#3E3F5B] font-bold" : "text-gray-600 hover:text-[#393e5c]"
          }`}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="navActiveIndicator"
            className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#393e5c] rounded-full"
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          />
        )}
      </Link>
    </motion.div>
  );
}

// Mobile NavLink Component
function MobileNavLink({ to, label, isActive, onClick }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="px-2"
    >
      <Link
        to={to}
        onClick={onClick}
        className={`block w-full px-4 py-3 rounded-lg text-lg ${isActive
          ? "bg-[#5F99AE]/10 text-[#302828] font-bold"
          : "text-gray-700 hover:bg-red-100/50 hover:text-[#152220] transition-colors duration-300"  
          }`}
      >
        {label}
      </Link>
    </motion.div>
  );
}