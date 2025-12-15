import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
        
        {/* Text content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Where Home Cooks <br />
            Share Their Best Recipes
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Create, discover, and save recipes shared by passionate cooks from
            around the world.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition font-medium"
            >
              Get started free
            </Link>

            <Link
              to="/home"
              className="text-orange-600 font-medium hover:underline"
            >
              Browse recipes
            </Link>
          </div>
        </div>

        {/* Image / Preview */}
        <div className="w-full h-64 md:h-80 bg-white rounded-xl shadow flex items-center justify-center text-gray-400">
          App preview coming soon
        </div>

      </div>
    </section>
  );
};

export default Hero;
