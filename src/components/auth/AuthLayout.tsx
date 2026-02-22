import { Link } from "react-router-dom";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-orange-50/40 flex">

      {/* Left Branding Panel*/}
      <div className="hidden lg:flex lg:w-1/2 bg-orange-100 items-center justify-center p-12">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Welcome to RecipeShare
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Discover recipes, share your creations, and connect with passionate
            home cooks from around the world.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="px-6 py-4">
          <Link to="/" className="text-xl font-bold text-orange-600">
            RecipeShare
          </Link>
        </header>

        {/* Content */}
        <main className="flex flex-1 items-center justify-center px-6">
          <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm">
            <h1 className="text-2xl font-bold mb-6 text-center">
              {title}
            </h1>

            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} RecipeShare
        </footer>
      </div>
    </div>
  );
};

export default AuthLayout;
