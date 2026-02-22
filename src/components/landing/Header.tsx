import { Link } from "react-router-dom";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          onClick={() => scrollToTop()}
          to="/"
          className="text-2xl font-bold text-orange-600 tracking-tight"
        >
          RecipeShare
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#features"
            className="text-gray-600 hover:text-orange-600 transition relative group"
          >
            Features
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-orange-600 transition relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-gray-600 hover:text-orange-600 text-sm font-medium transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-orange-700 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
