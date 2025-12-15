const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Everything You Need to Share Recipes
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            RecipeShare gives you simple tools to create, discover, and connect
            through food.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
            <div className="text-3xl">🍲</div>
            <h4 className="text-lg font-semibold">
              Create & Share Recipes
            </h4>
            <p className="text-gray-600 text-sm">
              Publish your favorite recipes with photos, ingredients, and
              step-by-step instructions.
            </p>

            {/* Image placeholder */}
            <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
              Feature preview
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
            <div className="text-3xl">❤️</div>
            <h4 className="text-lg font-semibold">
              Save Your Favorites
            </h4>
            <p className="text-gray-600 text-sm">
              Bookmark recipes you love and organize them for easy access
              anytime.
            </p>

            <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
              Feature preview
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
            <div className="text-3xl">👩‍🍳</div>
            <h4 className="text-lg font-semibold">
              Connect With Cooks
            </h4>
            <p className="text-gray-600 text-sm">
              Follow other home cooks, explore their recipes, and get inspired.
            </p>

            <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
              Feature preview
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
