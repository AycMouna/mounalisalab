import { Link } from 'react-router-dom'; // Use Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Grid Layout for Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              À propos
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Équipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/services/ai-analysis"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Analyse IA
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consultation"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Légal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/support"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} MounalisaLab. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
