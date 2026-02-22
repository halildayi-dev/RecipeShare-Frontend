import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold text-orange-600 mb-3">
            RecipeShare
          </h4>
          <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
            A simple, community-driven platform for sharing and discovering
            home-cooked recipes.
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-500">Explore</h5>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#features" className="text-gray-600 hover:text-orange-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-orange-600 transition">
                About
              </a>
            </li>
            <li>
              <Link
                to="/home"
                className="text-gray-600 hover:text-orange-600 transition"
              >
                Browse Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h5 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-500">
            Account
          </h5>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/login" className="text-gray-600 hover:text-orange-600 transition">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-gray-600 hover:text-orange-600 transition"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RecipeShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
