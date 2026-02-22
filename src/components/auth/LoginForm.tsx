import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading] = useState(false);
  return (
    <form className="space-y-6">

      {/* Email */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      {/* Password */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Link
            to="#"
            className="text-xs text-orange-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      {/* Remember Me */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          />
          Remember Me
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-medium hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isLoading ? "Singing in..." : "Log in"}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Secondary CTA */}
      <p className="text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-orange-600 font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
