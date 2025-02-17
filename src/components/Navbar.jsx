import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : i18n.language === "fr" ? "ar" : "en");
  };

  const pages = [
    { title: "Home", id: 0 },
    { title: "Services", id: 1 },
    { title: "Team", id: 2 },
    { title: "Story", id: 3 },
    { title: "ContactUs", id: 4 },
  ];

  const scrollToPage = (index) => {
    const container = document.getElementById("swipe-container");
    if (container) {
      container.scrollTo({
        left: container.clientWidth * index,
        behavior: "smooth",
      });
      setCurrentPage(index);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and Name */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={() => scrollToPage(0)}
              className="flex items-center space-x-2"
            >
              <img
                src="src/assets/logo2.png"
                alt="Logo"
                className="h-16 w-auto"
              />
              <span className="text-2xl font-bold text-blue-800 hover:text-teal-500 transition-colors">
                MounalisaLab
              </span>
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => scrollToPage(page.id)}
                className={`text-blue-800 hover:text-teal-500 transition-colors ${
                  currentPage === page.id ? "font-bold text-teal-500" : ""
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>

          {/* Right side - Search, Login, and Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-blue-800 hover:text-teal-500 transition-colors">
              <Search size={20} />
            </button>
            <Link
              to="/login"
              className="px-4 py-2 text-blue-800 hover:text-teal-500 transition-colors"
            >
              {t("login")}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-blue-800 hover:text-teal-500 transition-colors md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => {
                  scrollToPage(page.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-blue-800 hover:text-teal-500 transition-colors ${
                  currentPage === page.id ? "font-bold text-teal-500" : ""
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;