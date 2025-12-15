import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2">
        
        {/* Brand */}
        <div>
          <h4 className="text-lg font-semibold text-orange-600 mb-2">
            RecipeShare
          </h4>
          <p className="text-sm text-gray-600 max-w-sm">
            A simple, community-driven platform for sharing and discovering
            home-cooked recipes.
          </p>
        </div>

        {/* Links */}
        <div className="md:justify-self-end">
          <h5 className="text-sm font-semibold mb-3">Explore</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="text-gray-600 hover:text-orange-600">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-orange-600">
                About
              </a>
            </li>
            <li>
              <Link to="/login" className="text-gray-600 hover:text-orange-600">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-gray-600 hover:text-orange-600"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RecipeShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
