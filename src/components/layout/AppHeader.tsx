import { Link, NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          to="/home"
          className="text-xl font-bold text-orange-600"
        >
          RecipeShare
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "text-gray-600 hover:text-orange-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "text-gray-600 hover:text-orange-600"
            }
          >
            Profile
          </NavLink>

          <button
            className="text-gray-600 hover:text-orange-600"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
