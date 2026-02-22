import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
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

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `relative group ${isActive
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-orange-600"
                }`
              }
            >
              Profile
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
            </NavLink>

          </nav>
        </div>

        {/* Center Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/recipes/create"
            className="hidden md:inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition"
          >
            + New Recipe
          </Link>

          {/* Avatar Placeholder */}
          <Link to="/profile">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600 hover:bg-gray-300 transition">
              H
            </div>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default AppHeader;
