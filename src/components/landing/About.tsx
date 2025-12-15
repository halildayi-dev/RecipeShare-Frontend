const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid gap-12 md:grid-cols-2 items-center">
        
        {/* Text content */}
        <div>
          <h3 className="text-3xl font-bold mb-6">
            Built for People Who Love Cooking
          </h3>

          <p className="text-gray-600 mb-6">
            RecipeShare is a community-driven platform created for home cooks
            who want to share their favorite recipes, discover new ideas, and
            keep everything organized in one place.
          </p>

          <p className="text-gray-600">
            We believe great recipes don’t need complicated tools — just a
            welcoming space where food brings people together.
          </p>
        </div>

        {/* Values */}
        <div className="grid gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Community First</h4>
            <p className="text-sm text-gray-600">
              Recipes shared by real people, inspired by everyday cooking.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Simple by Design</h4>
            <p className="text-sm text-gray-600">
              Clean interfaces and intuitive tools that stay out of your way.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Made to Grow</h4>
            <p className="text-sm text-gray-600">
              A platform that evolves with its community over time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
