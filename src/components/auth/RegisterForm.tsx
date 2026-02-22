import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const [isLoading] = useState(false);

  return (
    <form className="space-y-6">

      {/* Name */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

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
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Repeat your password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      {/* Terms */}
      <div className="flex items-start gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
        />
        <span>
          I agree to the{" "}
          <Link to="#" className="text-orange-600 hover:underline">
            Terms of Service
          </Link> {" "}
          and{" "}
          <Link to="#" className="text-orange-600 hover:underline">
            Privacy Policy
          </Link>
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-medium hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isLoading ? "Creating account..." : "Create account"}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Helper */}
      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-600 font-medium hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;