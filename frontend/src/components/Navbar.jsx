import React, { useContext, useState, useRef, useCallback, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const [showGetStartedDropdown, setShowGetStartedDropdown] = useState(false);
  const getStartedTimeoutRef = useRef(null);
  
  const isHomePage = location.pathname === '/';

  // Handle scroll for floating navbar effect - only on home page
  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(true); // Always solid on other pages
      }
    };

    // Set initial state based on page
    if (isHomePage) {
      setIsScrolled(window.scrollY > 50);
    } else {
      setIsScrolled(true); // Force solid on other pages
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (getStartedTimeoutRef.current) {
        clearTimeout(getStartedTimeoutRef.current);
      }
    };
  }, []);

  const clearGetStartedTimeout = useCallback(() => {
    if (getStartedTimeoutRef.current) {
      clearTimeout(getStartedTimeoutRef.current);
      getStartedTimeoutRef.current = null;
    }
  }, []);

  const handleGetStartedMouseEnter = useCallback(() => {
    clearGetStartedTimeout();
    setShowGetStartedDropdown(true);
  }, [clearGetStartedTimeout]);

  const handleGetStartedMouseLeave = useCallback(() => {
    getStartedTimeoutRef.current = setTimeout(() => {
      setShowGetStartedDropdown(false);
    }, 200);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  }, [setToken, navigate]);

  const handlePatientPortal = useCallback(() => {
    window.open("https://www.halaxy.com/a/login", "_blank");
    setShowGetStartedDropdown(false);
    setShowMobileMenu(false);
  }, []);

  const handleBookOnline = useCallback(() => {
    window.open('https://www.halaxy.com/a/online/template/40707931/9990553/Jju3t2QO1ogNeXMDerOyCC9oVG1KZlBGK1MzeXZ1ZnNQOE94dDdoNTgxQVVYU0VuTWdaZjByT3ByWUJsN2IwRnFNQ3ZtS1VJZlVXTDJndVlnTjJSL0VTQ2VIZHEzdUliMFhMMHVJMEdYcnZPODFDKzhUMXJKNTZhS0k1Rnc4cys/34101055', '_blank');
    setShowGetStartedDropdown(false);
    setShowMobileMenu(false);
  }, []);

  const handleNavClick = useCallback((to, isScroll) => {
    if (isScroll) {
      const sectionId = to.split('#')[1];
      
      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        navigate(`/#${sectionId}`);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    } else {
      navigate(to);
    }
    setShowMobileMenu(false);
  }, [navigate]);

  const handleMobileMenuToggle = useCallback(() => {
    setShowMobileMenu(prev => !prev);
  }, []);

  const handleDashboardClick = useCallback(() => {
    navigate("/patient-dashboard");
    setShowMobileMenu(false);
  }, [navigate]);

  const handleProfileClick = useCallback(() => {
    navigate("/my-profile");
    setShowMobileMenu(false);
  }, [navigate]);

  const handleAppointmentsClick = useCallback(() => {
    navigate("/my-appointments");
    setShowMobileMenu(false);
  }, [navigate]);

  const handleMessagesClick = useCallback(() => {
    navigate("/messages");
    setShowMobileMenu(false);
  }, [navigate]);

  const handleMobileLogout = useCallback(() => {
    logout();
    setShowMobileMenu(false);
  }, [logout]);

  const handleLogoClick = useCallback(() => {
    navigate("/");
    setShowMobileMenu(false);
  }, [navigate]);

  // Navigation links configuration
  const navLinks = [
    { to: "/#about", label: "About Us", isScroll: true },
    { to: "/#services", label: "Services", isScroll: true },
    { to: "/#contact", label: "Contact", isScroll: true },
    { to: "/faq", label: "FAQ", isScroll: false }
  ];

  return (
    <>
      <div className={` rounded-2xl fixed inset-x-5 top-4 z-50 transition-all duration-300 px-4 ${
        isScrolled || !isHomePage
          ? 'bg-white/70 backdrop-blur-lg shadow-lg  border-gray-100' 
          : 'bg-transparent'
      }`}>
        <nav className="container max-w-5xl mx-auto ">
          <div className={`flex items-center justify-between  transition-all duration-300 ${
            isScrolled ? 'h-15 lg:h-17' : 'h-14 lg:h-16'
          }`}>
            {/* Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-12'
                }`}
                src={isScrolled || !isHomePage
                  ? "https://i.postimg.cc/XJySnps4/imgi-48-default.png"
                  : "https://i.postimg.cc/DzgG95bL/imgi-48-default.png"
                }
                alt="Psyencia"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ to, label, isScroll: isScrollNav }) => (
                isScrollNav ? (
                  <button
                    key={to}
                    onClick={() => handleNavClick(to, isScrollNav)}
                    className={`nav-link cursor-pointer transition-all duration-300 ${
                      isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {label}
                  </button>
                ) : (
                  <NavLink 
                    key={to} 
                    to={to} 
                    className={`nav-link transition-all duration-300 ${
                      isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {label}
                  </NavLink>
                )
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {token && userData ? (
                <div className="relative group">
                  <button className={`flex items-center space-x-2 transition-colors duration-200 ${
                    isScrolled || !isHomePage
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}>
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src={userData.image}
                      alt="Profile"
                    />
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="dropdown-menu">
                    <button onClick={() => navigate("/patient-dashboard")}>
                      Dashboard
                    </button>
                    <button onClick={() => navigate("/my-profile")}>
                      My Profile
                    </button>
                    <button onClick={() => navigate("/my-appointments")}>
                      My Appointments
                    </button>
                    <button onClick={() => navigate("/messages")}>
                      Messages
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={logout}
                      className="text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onMouseEnter={handleGetStartedMouseEnter}
                    onMouseLeave={handleGetStartedMouseLeave}
                    className="btn-primary flex items-center"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showGetStartedDropdown && (
                    <div
                      onMouseEnter={handleGetStartedMouseEnter}
                      onMouseLeave={handleGetStartedMouseLeave}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl z-50 border border-gray-100 py-1"
                    >
                      <button 
                        onClick={handlePatientPortal}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Patient Portal
                      </button>
                      <button 
                        onClick={handleBookOnline}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Book Online
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
                isScrolled || !isHomePage
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200 py-4 animate-slide-in">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map(({ to, label, isScroll: isScrollNav }) => (
                isScrollNav ? (
                  <button
                    key={to}
                    onClick={() => handleNavClick(to, isScrollNav)}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    {label}
                  </button>
                ) : (
                  <NavLink 
                    key={to} 
                    to={to} 
                    onClick={() => setShowMobileMenu(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    {label}
                  </NavLink>
                )
              ))}
              
              {token && userData ? (
                <>
                  <hr className="border-gray-200" />
                  <button 
                    onClick={handleDashboardClick}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    Dashboard
                  </button>
                  <button 
                    onClick={handleProfileClick}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    My Profile
                  </button>
                  <button 
                    onClick={handleAppointmentsClick}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    My Appointments
                  </button>
                  <button 
                    onClick={handleMessagesClick}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    Messages
                  </button>
                  <button
                    onClick={handleMobileLogout}
                    className="text-left text-red-600 font-medium transition-colors duration-300 py-1"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <button 
                    onClick={handlePatientPortal}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    Patient Portal
                  </button>
                  <button 
                    onClick={handleBookOnline}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-1"
                  >
                    Book Online
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .dropdown-menu {
          @apply absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200;
        }

        .dropdown-menu button {
          @apply block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200;
        }

        .nav-link {
          @apply font-medium transition-colors duration-300 relative group;
        }

        .nav-link::after {
          content: "";
          @apply absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300;
        }

        .nav-link:hover::after {
          @apply w-full;
        }

        .btn-primary {
          @apply bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg;
        }

        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;