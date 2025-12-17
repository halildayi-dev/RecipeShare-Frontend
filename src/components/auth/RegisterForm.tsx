import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="space-y-5">
      
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

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
          placeholder="Create a password"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Repeat your password"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition"
      >
        Create account
      </button>

      {/* Helper */}
      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-600 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
