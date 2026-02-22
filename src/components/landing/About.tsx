import ValueCard from "./ValueCard";

import { values } from "@/services/mocks/about";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        
        {/* Text content */}
        <div>
          <h3 className="text-3xl font-bold mb-6 leading-tight">
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
          {
            values.map((value) => 
              <ValueCard 
                key={value.id}
                title={value.title}
                description={value.description}
              />
            )
          }
        </div>

      </div>
    </section>
  );
};

export default About;
