import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="space-y-5">
      
      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition"
      >
        Log in
      </button>

      {/* Helper */}
      <p className="text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-orange-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
