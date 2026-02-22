import { Link, NavLink } from "react-router-dom";

const SimpleHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-8">

          {/* Brand */}
          <Link
            to="/home"
            className="text-xl font-bold text-orange-600 tracking-tight"
          >
            RecipeShare
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `relative group ${isActive
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-orange-600 transition"
                }`
              }
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
