import { Link } from "react-router-dom";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Header */}
      <header className="px-6 py-4">
        <Link to="/" className="text-xl font-bold text-orange-600">
          RecipeShare
        </Link>
      </header>

      {/* Content */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {title}
          </h1>

          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RecipeShare
      </footer>
    </div>
  );
};

export default AuthLayout;
